import { expect } from "chai";
import { describe, it } from "mocha";
import { healthCheckSync, healthCheckAsync } from "../controllers/health.controller";

describe("Test /health", () => {
  describe("Health check on /sync", () => {
    it("health should be okay", () => {
      const result = healthCheckSync();
      expect(result).to.equal("OK");
    });
  });

  describe("Health check on /async", () => {
    it("health should be okay", async () => {
      const result = await healthCheckAsync();
      expect(result).to.equal("OK");
    });
  });
});
