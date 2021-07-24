import * as scoreRepository from "../repositories/scoreRepository"

export async function checkSong(id:number) {
    const result= await scoreRepository.findSongById(id);
    return result;
};

export async function upVote(id:number) {
    const result= await scoreRepository.upVoteScore(id);
    return result;
};

export async function downVote(id:number) {
    const result= await scoreRepository.downVoteScore(id);
    console.log(result);
    if(result.score==-5) await scoreRepository.deleteSong(id);
    return result;
};
