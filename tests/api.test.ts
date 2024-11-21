import VALOAPI, { IAccountDetails } from "../src/index";
import { assert } from "chai";

require('dotenv').config()

runTests();

function runTests() {
  if (!process.env.TOKEN) {
    return console.error("Token either not provided, is undefined, or null");
  }

  const valApi = new VALOAPI(process.env.TOKEN);

  describe("Get Account Details", async () => {
    it("Should return the account details successfully.", async () => {
      const result = await valApi.getAccount({ name: "Ryumin", tag: "ELI" });
      assert.equal(result.status, 200);
    });

    it("Should return a 404 upon searching for an invalid user.", async () => {
      const res = await valApi.getAccount({ name: "ryumin3213", tag: "37213" });
      assert.equal(res.status, 404);
    })
  });

  describe("Get history", async () => {
    it("Get match history", async () => {
      const result = await valApi.getMatches({ region: "ap", name: "Ryusdfsmin", tag: "ELI", filter: "premier", map: "kasbah" });
      if (!result.data) return console.log("none");
      console.log(result);
    });
  })

  // More tests to be added, womp womp
}
