CREATE TABLE wheel_courses (id TEXT PRIMARY KEY NOT NULL,round_id TEXT NOT NULL,snapshot TEXT NOT NULL,created_at INTEGER NOT NULL);
--> statement-breakpoint
CREATE TABLE wheel_scores (course_id TEXT NOT NULL,address TEXT NOT NULL,score INTEGER NOT NULL,distance INTEGER NOT NULL,seeds INTEGER NOT NULL,achieved_at INTEGER NOT NULL,PRIMARY KEY(course_id,address));
--> statement-breakpoint
CREATE INDEX wheel_score_rank ON wheel_scores(course_id,score DESC,distance DESC,achieved_at ASC,address ASC);
--> statement-breakpoint
ALTER TABLE score_challenges ADD COLUMN course_id TEXT;
