import express from "express";
import cors from "cors";

import * as recommendationController from "../controllers/recommendationController";
import * as scoreController from "../controllers/scoreController";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/recommendations",recommendationController.newRecommendation);

app.post("/recommendations/:id/upvote",scoreController.upVote);

app.post("/recommendations/:id/downvote",scoreController.downVote);

app.get("/recommendations",recommendationController.recommendation);

export default app;
