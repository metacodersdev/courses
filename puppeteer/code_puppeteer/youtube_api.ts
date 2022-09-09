
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

    const sites = await prisma.site.findMany({
        where: {
            parent_id: 1,
        },
    });
    sites.forEach((site) => {
        youtube.search.list({
                part:'id,snippet',
                q: site.keywords,
                type: 'video',
                eventType:'none',
                maxResults: 20
            }).then((res1:any) => {
            if (res1.data.items) {
                const ids=res1.data.items.map((el:any) =>  {
                    return el.id.videoId
                }
                );
                youtube.videos.list({
                    part:'contentDetails,snippet, statistics',
                    id: ids.join(','),
                    //maxResults: 50
                }).then(async(res:any) => {
                        const _FormatISO = formatISO(new Date());
                        const items = res.data.items.map((el:any) =>  {
                            return {
                                title: el.snippet.title,
                                img_url: el.id,
                                video_url: el.id,
                                description: el.snippet.description,
                                //short_description: el.snippet.description,
                                site_id:site.id,
                                course_url:el.id,
                                last_updated: el.snippet.publishedAt,//_FormatISO,
                                during: el.contentDetails.duration,
                                count_views: el.statistics.viewCount,
                                count_like: el.statistics.likeCount,
                                count_comment: el.statistics.commentCount,
                                channel_id: el.snippet.channelId,
                                channel_name: el.snippet.channelTitle,
                                //subscribers_count:
                            }
                        }
                        );
                        const courses = await prisma.course.createMany({data:items});
                })
                .catch(error => {
                    console.error(error);
                }); 
            }
        
        })
        .catch(error => {
            console.error(error);
        });    
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