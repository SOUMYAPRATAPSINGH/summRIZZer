import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const rapidApiKey=import.meta.env.VITE_RAPID_API_KEY;


// const options = {
//     method: 'GET',
//     url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
//     params: {
//       url: 'https://time.com/6266679/musk-ai-open-letter/',
//       length: '3'
//     },
//     headers: {
//       'X-RapidAPI-Key': '95f39bbdabmsh3a50e9fdc3848c3p1a1163jsna9553afd9f8d',
//       'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
//     }
//   };

export const articleApi =createApi({
    reducerpath:'articleApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key',rapidApiKey);
            headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints:(builder)=>({
        getSummary:builder.query({
            query:(params)=>`/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
    });
    export const {useLazyGetSummaryQuery}=articleApi;