
require('dotenv').config()
const { google } = require('googleapis');
//import { google } from 'googleapis'
import { PrismaClient } from '@prisma/client'
import { formatISO } from 'date-fns'
const prisma = new PrismaClient()

const youtube = google.youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_KEY
});
async function main() {

    const site = await prisma.site.findMany({
        where: {
            parent_id: 1,
        },
    });
    youtube.search.list({
            part:'id,snippet',
            q: 'Node.js',
            type: 'video',
            maxResults: 5
        }).then(async(res:any) => {
        if (res.data.items) {
            //console.log(res.data.items);
            const _FormatISO = formatISO(new Date());
            const items = res.data.items.map((el:any) =>  {
                    return {
                        title: el.snippet.title,
                        img_url: el.id.videoId,
                        video_url: el.id.videoId,
                        description: el.snippet.description,
                        short_description: el.snippet.description,
                        site_id:1,
                        count_views:0,
                        course_url:el.id.videoId,
                        last_updated:_FormatISO
                    }
                }
            );
            console.log(items);
            const courses = await prisma.course.createMany({data:items});
            console.log(courses);
            //console.log(dataInserts);
        }
    
    })
    .catch(error => {
        console.error(error);
    });    
    
}
main()
.then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    //process.exit(1);
});
//"nextPageToken":"CAUQAA",