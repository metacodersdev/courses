
require('dotenv').config()
import axios from 'axios';
import { PrismaClient } from '@prisma/client'
import { formatISO } from 'date-fns'
const prisma = new PrismaClient()
async function main() {
    const sites = await prisma.site.findMany({
        where: {
            parent_id: 2,
        },
    });
    sites.forEach(async(site) => {
        try {
            // 👇️ const data: GetUsersResponse
            const { data } = await axios.get(
            'https://www.udemy.com/api-2.0/courses/?category=Development&language=en&page=1&page_size=20&instructional_level=beginner&ratings=4.5&search='+site.keywords+'&fields[course]=@all,-caption_locales,-price_serve_tracking_id,-rating_distribution,-features,-caption_languages',
            {
                headers: {
                Accept: 'application/json',
                Authorization: process.env.UDEMY_AUTHORIZATION,
                },
            },
            );
            const _FormatISO = formatISO(new Date());
            const items = data.results.map((el:any) =>  {
                    return {
                        title: el.title,
                        img_url: el.image_480x270,
                        video_url: el.id.toString(),
                        description: el.description,
                        price:el.price,
                        short_description: el.headline,
                        site_id:site.id,
                        course_url:el.url,
                        last_updated: el.last_update_date?el.last_update_date:el.created, //_FormatISO,
                        during: el.estimated_content_length.toString(),
                        count_views: el.num_reviews.toString(),
                        count_like: el.avg_rating.toString(),
                        rating: el.avg_rating.toString(),
                        count_comment: el.num_reviews_recent.toString(),
                        //channel_id: el.snippet.channelId,
                        //channel_name: el.snippet.channelTitle,
                        subscribers_count:el.num_subscribers.toString(),
                        include: JSON.stringify({
                            visible_instructors: el.visible_instructors,
                            discount: el.discount,
                            num_lectures:el.num_lectures,
                            num_published_lectures:el.num_published_lectures,
                            content_info: el.content_info,
                            })
                    }
                }
            );
            //console.log(items); return false;
            const courses = await prisma.course.createMany({data:items});
        } catch (error) {
            if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
            } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
            }
        }
    })
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