# Genesis Code submission draft

**Project name:** Hamster Run: Wheelbound Trails

**Live site:** https://hamster-seed-run-nov8.grainyfalcon2.chatgpt.site/

**Source repository:** https://github.com/houhailin2235-design/hamster-wheelbound-trails

## What does it do, and how does it use Squeekchain?

Hamster Run: Wheelbound Trails is a bilingual browser platformer that turns Squeekchain's settled hamster work into shared, replayable challenges.

The server reads SqueekCore on Ethereum Sepolia at a confirmation-delayed block, verifies the pinned Core identity, and selects the most recent active settled round. Its round ID and dataHash generate a reproducible course: trap types, timed-spike phases, enemy speeds and strawberry rewards. Every player selecting that round gets the same course, pinned for their entire run. The game displays the source round, work units, dataHash, contract and Ethereum snapshot block so reviewers can inspect its provenance. Unavailable chain data is labeled unavailable, not replaced with fabricated live data.

Players jump, stomp enemies, burrow beneath thorn walls and distinguish real hazards from decoys. The game also includes endless exploration, three changing biomes, 20 achievements and 16 cosmetic collectibles. Wallet-signed scores are grouped by challenge and stored off-chain. Scores remain client-reported, not on-chain verified. No transaction or token approval is needed; in-game seeds are not SQK.

## Reviewer walkthrough

Open the Adventure page → refresh the Squeekchain round → inspect the displayed contract, block and dataHash → start the round challenge → inspect its round-specific leaderboard. Repeat the same round in a second browser to compare the course.

## Submission prerequisites still external to the build

- Public source: https://github.com/houhailin2235-design/hamster-wheelbound-trails
- Add the exact repository attribution/verification text supplied by Genesis.
- Domain ownership verification remains subject to Genesis requirements; the current hosted URL has not been claimed as an owner-controlled DNS domain.
