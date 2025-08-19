import fetch from "node-fetch";
import type { Logger } from "pino";
import {
  type BranchEventsPayload,
  LoggingStandardEvents,
  LoggingType,
} from "./types/interfaces.js";

export class BranchIOEvents {
  private readonly branchKey: string;
  private validStandardEvents: Array<LoggingStandardEvents>;
  logger?: Logger;

  constructor(branchKey: string) {
    this.branchKey = branchKey;
    this.validStandardEvents = Object.values(LoggingStandardEvents);
    // Creates Flexibility to LoggingStandardEvents and reduces comp
  }

  setLogger(logger: Logger) {
    this.logger = logger;
  }

  private URIFactory(type: LoggingType) {
    return `https://api2.branch.io/v2/event/${type}`;
  }

  async triggerEvent(type: LoggingType, payload: BranchEventsPayload) {
    if (this.logger) {
      this.logger.info("Triggering Branch.IO Event");
      this.logger.child({ payload: payload });
    } else {
      console.error('Logger has not been set! Defaulting to "console.info".');
      console.info("Triggering Branch.IO Event");
      console.info(payload);
    }

    if (
      type === LoggingType.STANDARD &&
      !this.validStandardEvents.includes(payload.name as LoggingStandardEvents)
    ) {
      throw new Error(
        `Invalid Standard Logging Type. Must be of type "LoggingStandardEvents" enum.`,
      );
    }

    const finalPayload = {
      branch_key: this.branchKey,
      ...payload,
    };

    return await fetch(this.URIFactory(type), {
      method: "POST",
      body: JSON.stringify(finalPayload),
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
    });
  }
}
