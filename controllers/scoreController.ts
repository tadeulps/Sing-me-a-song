import { Request, Response} from "express";
import { send } from "process";

import * as scoreService from "../services/scoreService";

export async function upVote(req:Request,res:Response) {
    try{
        const id=Number(req.params.id);
        if(!id) return res.sendStatus(400);

        const song= await scoreService.checkSong(id);
        if(!song) return res.sendStatus(404);

        const result=await scoreService.upVote(id);
        if(!result) return res.sendStatus(404);

        res.sendStatus(200);

    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
};

export async function downVote(req:Request,res:Response) {
    try{
        const id=Number(req.params.id);
        if(!id) return res.sendStatus(400);

        const song= await scoreService.checkSong(id);
        if(!song) return res.sendStatus(404);

        const result=await scoreService.downVote(id);
        if(!result) return res.sendStatus(404);

        res.sendStatus(200);

    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
};

