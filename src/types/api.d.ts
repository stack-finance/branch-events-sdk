import type { Response } from "node-fetch";
import type { Logger } from "pino";
import type { BranchEventsPayload, LoggingType } from "./interfaces.js";

export class BranchIOEvents {
    /**
     * Constructor for BranchIO / Events class. Will perform the heavylifting for all the trigger events.
     * @param {string} branchKey - The Branch key can start with "key_live_xxxx" or "key_test_xxx"
     */
    constructor(branchKey: string);

    /**
     *
     * @param {Logger} logger - Provide a logger from PinoJS and branches (NestJS Pino, etc.)
     */
    setLogger(logger: Logger): void;

    /**
     * Method to add a new event or update an existing event.
     * @param {object} payload - An object which contains the JSON payload defined in the docs here: https://developers.google.com/analytics/devguides/collection/protocol/ga4/reference?client_type=firebase#payload_post_body
     * @returns {Promise} A response promise(fetch promise) from the provider, if successful, the response will be in JSON format. Errors need to be handled separately.
     */
    triggerEvent(type: LoggingType, payload: BranchEventsPayload): Promise<Response>;

}