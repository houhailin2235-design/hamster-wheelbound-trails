CREATE TABLE leaderboard (address TEXT PRIMARY KEY NOT NULL,score INTEGER NOT NULL,distance INTEGER NOT NULL,seeds INTEGER NOT NULL,achieved_at INTEGER NOT NULL);
--> statement-breakpoint
CREATE INDEX leaderboard_ranking ON leaderboard(score DESC,distance DESC,achieved_at ASC,address ASC);
--> statement-breakpoint
CREATE TABLE score_challenges (nonce TEXT PRIMARY KEY NOT NULL,address TEXT NOT NULL,score INTEGER NOT NULL,distance INTEGER NOT NULL,seeds INTEGER NOT NULL,expires INTEGER NOT NULL,created_at INTEGER NOT NULL,used INTEGER NOT NULL DEFAULT 0);
--> statement-breakpoint
CREATE INDEX challenges_wallet_time ON score_challenges(address,created_at);
--> statement-breakpoint
CREATE INDEX challenges_expiry ON score_challenges(expires);
