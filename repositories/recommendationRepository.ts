import connection from "../database";

export async function newRecommendation(name:string,youtubeLink:string) {
    const result= await connection.query(`INSERT INTO recommendations (name,url) 
    VALUES ($1,$2) RETURNING *`,[name,youtubeLink]);
    return result.rows[0];
    
};

export async function checkIfSongsExist() {
    const result =await connection.query(` SELECT * FROM recommendations`);
    return result.rowCount;
};

export async function  randomSong(x:number) {
    let result;
    if(x===10){
        result =await connection.query(`SELECT * FROM recommendations WHERE score>10`);
        return result.rows;
    }else if(x===1){
        result =await connection.query(`SELECT * FROM recommendations WHERE score<=10`);
        return result.rows;
    }else{
        result =await connection.query(`SELECT * FROM recommendations`);
        return result.rows;
    }
};

export async function topSongs(amount:number) {
    const result = await connection.query(`SELECT * FROM recommendations ORDER BY score DESC 
    LIMIT $1`,[amount]);
    return result.rows;
}
