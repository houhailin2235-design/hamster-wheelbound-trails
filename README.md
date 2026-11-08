# Hamster Run: Wheelbound Trails

A bilingual browser platformer where Squeekchain's **settled work** creates shared, reproducible challenge courses. Existing endless mode remains available independently.

**Source:** https://github.com/houhailin2235-design/hamster-wheelbound-trails

**Play:** https://hamster-seed-run-nov8.grainyfalcon2.chatgpt.site/

## Try the integration

1. Open the game and find **Wheelbound Trails / Squeekchain** on the Adventure page.
2. Refresh the round. The server reads Ethereum Sepolia 12 blocks behind the tip and verifies the pinned SqueekCore deployment.
3. Inspect the active settled round, work units, full `dataHash`, safe Ethereum block, contract link and official documentation link.
4. Connect a browser wallet and choose **Start round challenge**. No blockchain transaction or token approval is requested.
5. Challenge courses use the same round identity and seed for every player. Select the corresponding round in the leaderboard; wallet signatures submit client-reported scores to that round only.

## What Squeekchain actually changes

The server reads `state()` and `roundPage()` from the official SqueekCore **proxy**, pinned to release `core-sepolia-20261103`, revision 7:

`0xfd6c166d4b8e2962e65746a13e5a0797cd4de0c4` on Sepolia, chain ID `11155111`.

It verifies chain ID, proxy implementation/admin slots, implementation runtime hash, storage-layout digest, ProxyAdmin owner, stream ID, genesis timestamp and round length. All contract reads in a snapshot use the same block tag. This is a Core-specific read verification, not a claim to verify every economy contract.

The server looks backward through up to 192 certified rounds for the most recent **active** round. Missing future rounds are never treated as zero-work rounds. If no eligible round is found or verification/RPC fails, the UI reports unavailable; it never invents a live round. Endless mode continues to work.

Seed input (UTF-8):

```
wheel-v1|11155111|<lowercase core proxy>|<decimal roundId>|<lowercase dataHash>
```

The seed hash is Ethereum `keccak256(input)`. The generator uses the first 32 bits as an unsigned integer. Integer-only chunk randomness determines trap templates, timed-spike phase, enemy speed and strawberry reward placement. The seed and `wheel-v1` version stay pinned for the entire run. Gameplay advances at a fixed 120 Hz simulation step, with hazard clocks reset at run start.

## Product

- Endless side-scrolling exploration; jumping, enemy stomping, burrowing, real and decoy traps.
- Three gradually changing woodland environments.
- Chinese/English switch with remembered language preference.
- 20 achievements and 16 cosmetic items, including earned achievement gates.
- Local, wallet-scoped quests/cosmetics; shared D1-backed endless and per-round leaderboards.

## Trust and limitations

- **Course provenance is chain-derived; scores are not on-chain verified.** This is a casual leaderboard, not a secure competitive scoring protocol.
- Signatures prove the submitting wallet and bind the score to its challenge, nonce and expiry. Nonces are single-use. Signature checks do not prove that the client played honestly.
- In-game seeds are points, not SQK. Cosmetics are not NFTs. No funds, private keys, token approvals or contract writes are needed.
- Sepolia is a testnet. A trusted RPC is still required; pinned code checks do not make an untrusted RPC cryptographically trustless.
- Browser-local progress can be lost when site data is cleared; leaderboard data persists in D1.

## Source layout

- `server/squeekchain.mjs`: official deployment pins, read verification, settled-round lookup, seed derivation.
- `server/worker.mjs`: challenge API, leaderboard API and signed submissions.
- `web/platform.js`: physics and reproducible challenge generation.
- `web/round-challenge.js`: provenance panel and mode selection.
- `web/hub-model.js`, `web/premium.js`: progression and UI.
- `drizzle/`: append-only SQLite/D1 migrations.

## Run and build

Node.js 24 or later:

```
npm ci
npm run build
npm test
```

The build embeds optimized browser assets into `dist/server/index.js`, a Cloudflare Worker ES module. A logical D1 binding named `DB` is required. Apply the SQL migrations in filename order before serving the API. For the Sites deployment, the hosting manifest carries `d1: "DB"`; the hosting workflow applies migrations.

For another Cloudflare deployment, copy `wrangler.example.jsonc` to `wrangler.jsonc`, set your own D1 ID and deploy with Wrangler. A custom `SQUEEK_RPC_URL` can be configured server-side; by default the public Sepolia RPC at `https://ethereum-sepolia-rpc.publicnode.com` is used. No RPC key is bundled in browser code.

Tests use in-memory SQLite and synthetic wallets. No fake scores or test wallets are inserted into the live leaderboard.

## Official references

- https://docs.squeekchain.com/developers/
- https://docs.squeekchain.com/developers/core/
- https://docs.squeekchain.com/developers/quickstart/
- https://docs.squeekchain.com/assets/deployments/sepolia.json

## Attribution

Independent community project; not an official Squeekchain product. Game art was AI-generated from a user-provided character reference and project briefs. Third-party Ethers browser distribution retains its license header. Sharp and LinkeDOM are development dependencies.

The exact Genesis repository verification line must be added when Squeekchain supplies it. No verification or approval is claimed yet.

The source distribution includes optimized WebP game art. `npm ci` restores the pinned Ethers browser bundle from npm; generated bundles, local settings and credentials are excluded from Git.
