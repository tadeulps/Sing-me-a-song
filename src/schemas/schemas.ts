import joi from "joi";

const newRecommendationSchema=joi.object({
    name: joi.string().required(),
    youtubeLink:joi.string().regex(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/)
});

const amountSchema=joi.object({
    amount:joi.number().positive().required()
});

export{newRecommendationSchema,amountSchema}