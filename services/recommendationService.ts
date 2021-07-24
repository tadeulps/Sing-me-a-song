import * as recommendationRepository from '../repositories/recommendationRepository';

export async function newRecommendation(name:string,youtubeLink:string) {
    const result = await recommendationRepository.newRecommendation(name,youtubeLink);
    if(result.length===0) return null;
    return result;
};

export async function randomSong() {
    const checkSongs= await recommendationRepository.checkIfSongsExist();
    if(checkSongs===0) return false;

    let result;

    const chance=Math.random();

    if(chance>0.3){
        result= await recommendationRepository.randomSong(10);
    }else{
        result=await recommendationRepository.randomSong(1);
    }
    if(result.length===0){
        result=await recommendationRepository.randomSong(0);
    }

    const random=Math.floor(Math.random() * result.length);
    return result[random];
};

export async function topSongs(amount:number) {
    const result= await recommendationRepository.topSongs(amount);
    if(result.length===0) return null;

    return result;
};
