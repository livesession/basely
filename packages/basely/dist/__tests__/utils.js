import fs from 'node:fs';
import { expect } from 'vitest';
export async function expectResponseToMatchFixture(response, fixturePath) {
    const responseBuffer = Buffer.from(await response.arrayBuffer());
    const fixtureBuffer = fs.readFileSync(fixturePath);
    expect(responseBuffer).toEqual(fixtureBuffer);
}
