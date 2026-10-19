import assert from "node:assert/strict";
import test from "node:test";
import { trysail } from "../index.js";

test("trysail returns its greeting", () => {
  assert.equal(trysail(), "All aboard!");
});