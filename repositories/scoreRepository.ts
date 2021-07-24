import connection from "../database";

export async function findSongById(id:number) {
    const result= await connection.query(`SELECT * FROM recommendations WHERE id=$1`,[id]);
    return result.rows[0];
};

export async function upVoteScore(id:number) {
    const result=await connection.query(`UPDATE recommendations SET score=score+1 WHERE id=$1`,[id]);
    return true;
};

export async function downVoteScore(id:number) {
    const result=await connection.query(`UPDATE recommendations SET score=score-1 WHERE id=$1 RETURNING score`,[id]);
    return result.rows[0];
};

export async function deleteSong(id:number) {
    const result=await connection.query(`DELETE FROM recommendations WHERE id=$1`,[id]);
    return true;
};
