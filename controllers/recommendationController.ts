import { Request, Response} from "express";
import {newRecommendationSchema,amountSchema} from "../src/schemas/schemas";

import * as recommendationServices from "../services/recommendationService";

export async function newRecommendation(req:Request,res:Response){
    try{
        const {name,youtubeLink}=req.body;

        const validation=newRecommendationSchema.validate({name,youtubeLink});
        if(validation.error){
            return res.sendStatus(400);
        }
        const postRecommendation=await recommendationServices.newRecommendation(name,youtubeLink);
        if(!postRecommendation) return res.sendStatus(409);

        res.sendStatus(201)
    }
        catch(error){
        console.log(error);
        res.sendStatus(500);
    }
};

export async function recommendation(req:Request,res:Response) {
    try{
        const result =  await recommendationServices.randomSong();
        if(!result) return res.sendStatus(404);

        res.send(result).status(200);
    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }

}

export async function topSongs(req:Request,res:Response) {
    try{
        const amount=Number(req.params.amount);
        const validation=amountSchema.validate({amount});
        if(validation.error) return res.sendStatus(400)

        const result = await recommendationServices.topSongs(amount);
        if(!result) return res.sendStatus(404);

        res.send(result).status(200);
    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
}