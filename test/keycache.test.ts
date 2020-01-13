import { expect, assert } from "chai";
import { KeyCache } from "../src/keycache";
import {createPeerIdsFromFixtures} from "./fixtures/peer";

describe("KeyCache", () => {
  let peerA, peerB;

  before(async () => {
    [peerA, peerB] = await createPeerIdsFromFixtures(2);
  });

  it("should store and load same key successfully", async() => {
    try {
      const key = Buffer.from("this is id 007");
      await KeyCache.store(peerA, key);
      const result = await KeyCache.load(peerA);
      assert(result.equals(key), "Stored and loaded key are not the same");
    } catch (e) {
      console.error(e);
      assert(false, `Test failed - ${e.message}`)
    }
  });
});
