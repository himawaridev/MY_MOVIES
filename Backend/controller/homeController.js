const BlogPost = require('../models/post');
const router = require('../router/router');


//Math
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const homePage = (req, res) => {
    return res.json({ code: 200, msg: 'homepage is success', data: 0 })
};

const menu = (req, res) => {
    return res.json({ code: 200, msg: 'menu is success', data: 0 });
};

const banners = (req, res) => {
    return res.json({ code: 200, msg: "banners is success", data: 0 });
};

const trending = (req, res) => {
    const listFilmLeft = [
        {
            id: 1,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/upmXGc1QovmPBU0mQJR2re6ruKd.jpg',
            name: 'Percy Jackson và Các Vị Thần Trên Đỉnh Olympus',
            date: 'Dec 19, 2023',
            statistical: random(10, 100),
        },
        {
            id: 1,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/3I8he6xhfPW4yWQRVJOuREWSJzA.jpg',
            name: 'Đấu Trường Sinh Tử: Khúc Hát Của Chim Ca & Rắn Độc',
            date: 'Nov 15, 2023',
            statistical: random(10, 100),
        },
        {
            id: 1,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/k06DSB9gny7AhnWz8uzVcakw73n.jpg',
            name: 'Lễ Tạ Ơn Kinh Hoàng',
            date: 'Nov 16, 2023',
            statistical: random(10, 100),
        },
        {
            id: 1,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/kxj7rMco6RNYsVcNwuGAIlfWu64.jpg',
            name: 'Maestro',
            date: 'Nov 22, 2023',
            statistical: random(10, 100),
        },
        {
            id: 1,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg',
            name: 'Đêm Yên Lặng',
            date: 'Nov 30, 2023',
            statistical: random(10, 100),
        },
        {
            id: 1,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/sjLLA6PGxoN0kmCuwxgb8CR0F29.jpg',
            name: 'Aquaman và Vương Quốc Thất Lạc',
            date: 'Dec 20, 2023',
            statistical: random(10, 100),
        },
        {
            id: 1,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/2r0nLLGFxXfKd8oRb4PWoy35osn.jpg',
            name: 'Kế Hoạch Bảo Vệ Gia Đình - The Family Plan',
            date: 'Dec 14, 2023',
            statistical: random(10, 100),
        },
        {
            id: 1,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/4YIAX1XGcdVwtvYpqj1w79EvMLE.jpg',
            name: 'Phi Đội Gà Bay 2: Âm Mưu Gà Nugget',
            date: 'Dec 08, 2023',
            statistical: random(10, 100),
        },
        {
            id: 1,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/pyVuoZzw2mpBmcYE8sb5EB8NwJ6.jpg',
            name: 'Wonka',
            date: 'Dec 06, 2023',
            statistical: random(10, 100),

        },
        {
            id: 1,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/eLOLQ7U6LrDYZ2ysN9NYkD0xGyw.jpg',
            name: 'South Park (Not Suitable for Children)',
            date: 'Dec 20, 2023',
            statistical: random(10, 100),

        },
        {
            id: 1,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/90D6sXfbXKhDpd4S1cHICdAe8VD.jpg',
            name: 'Finestkind',
            date: 'Sep 08, 2023',
            statistical: random(10, 100),

        },
    ];
    const listFilmRight = [
        {
            id: 2,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/3I8he6xhfPW4yWQRVJOuREWSJzA.jpg',
            name: 'Đấu Trường Sinh Tử: Khúc Hát Của Chim Ca & Rắn Độc',
            date: 'Nov 15, 2023',
            statistical: random(10, 100),
        },
        {
            id: 2,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/1yTixpj3zakA1XFUq5PxR836HXO.jpg',
            name: 'Vầng Trăng Máu',
            date: 'Oct 18, 2023',
            statistical: random(10, 100),
        },
        {
            id: 2,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/3syYwwZbmk8xRhFKBYvbiY0B037.jpg',
            name: 'Oppenheimer',
            date: 'Jul 19, 2023',
            statistical: random(10, 100),
        },
        {
            id: 2,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/pyVuoZzw2mpBmcYE8sb5EB8NwJ6.jpg',
            name: 'Wonka',
            date: 'Dec 06, 2023',
            statistical: random(10, 100),
        },
        {
            id: 2,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/4YIAX1XGcdVwtvYpqj1w79EvMLE.jpg',
            name: 'Phi Đội Gà Bay 2: Âm Mưu Gà Nugget',
            date: 'Dec 08, 2023',
            statistical: random(10, 100),
        },
        {
            id: 2,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/4edFyasCrkH4MKs6H4mHqlrxA6b.jpg',
            name: 'Bác Sĩ Vô Danh',
            date: 'Mar 26, 2005',
            statistical: random(10, 100),
        },
        {
            id: 2,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/sjLLA6PGxoN0kmCuwxgb8CR0F29.jpg',
            name: 'Aquaman và Vương Quốc Thất Lạc',
            date: 'Dec 20, 2023',
            statistical: random(10, 100),
        },
        {
            id: 2,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/29rhl1xopxA7JlGVVsf1UHfYPvN.jpg',
            name: 'Bỏ thế giới lại sau lưng',
            date: 'Nov 22, 2023',
            statistical: random(10, 100),
        },
        {
            id: 2,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/k06DSB9gny7AhnWz8uzVcakw73n.jpg',
            name: 'Lễ Tạ Ơn Kinh Hoàng',
            date: 'Nov 16, 2023',
            statistical: random(10, 100),
        },
        {
            id: 2,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/jFuH0md41x5mB4qj5344mSmtHrO.jpg',
            name: 'Reacher: Phát Súng Cuối Cùng',
            date: 'Feb 03, 2022',
            statistical: random(10, 100),
        },
    ];
    // const filmsLeft = await Film.find({category: 'left'});
    // const filmsRight = await Film.find({category: 'right'});
    return res.json({ code: 200, msg: "trending is success", data: [listFilmLeft, listFilmRight] });
}

const trailers = (req, res) => {
    const listTrailersLeft = [
        {
            id: 3,
            video: 'https://www.youtube.com/watch?v=ejWo1KHRYTI',
            image: 'https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/zNugnnR5KEmq9EzLcl0Me1UmHYk.jpg',
            name: 'Rick và Morty',
            description: 'Season 7 Coming to Max Jan 22',
        },
        {
            id: 3,
            video: 'https://www.youtube.com/watch?v=ejWo1KHRYTI',
            image: 'https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/5qUq8oCHnMz4IodB3WRJ3rmAl83.jpg',
            name: 'Gia Đình × Điệp Viên',
            description: 'Trailer Chính Thức',
        },
        {
            id: 3,
            video: 'https://www.youtube.com/watch?v=ejWo1KHRYTI',
            image: 'https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/h47vT6X82WlHoAcQpyhPW6I3gSj.jpg',
            name: 'Rick và Morty',
            description: 'Season 7 Coming to Max Jan 22',
        },
        {
            id: 3,
            video: 'https://www.youtube.com/watch?v=ejWo1KHRYTI',
            image: 'https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/j64H7GlYSarltRHJOl75jxLTRV6.jpg',
            name: 'Rick và Morty',
            description: 'Season 7 Coming to Max Jan 22',
        },
        {
            id: 3,
            video: 'https://www.youtube.com/watch?v=ejWo1KHRYTI',
            image: 'https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/j64H7GlYSarltRHJOl75jxLTRV6.jpg',
            name: 'Rick và Morty',
            description: 'Season 7 Coming to Max Jan 22',
        },
    ];
    const listTrailersRight = [
        {
            notification: "This panel didn't return any results. Try refreshing it."
        }
    ]
    return res.json({ code: 200, msg: "trailers is success", data: [listTrailersLeft, listTrailersRight] });
}

const popular = (req, res) => {
    const popularLeft = [
        {
            id: 4,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/upmXGc1QovmPBU0mQJR2re6ruKd.jpg',
            name: 'Percy Jackson và Các Vị Thần Trên Đỉnh Olympus',
            date: 'Dec 19, 2023',
            statistical: random(10, 100),
        },
        {
            id: 4,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/3I8he6xhfPW4yWQRVJOuREWSJzA.jpg',
            name: 'Đấu Trường Sinh Tử: Khúc Hát Của Chim Ca & Rắn Độc',
            date: 'Nov 15, 2023',
            statistical: random(10, 100),
        },
        {
            id: 4,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/k06DSB9gny7AhnWz8uzVcakw73n.jpg',
            name: 'Lễ Tạ Ơn Kinh Hoàng',
            date: 'Nov 16, 2023',
            statistical: random(10, 100),
        },
        {
            id: 4,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/kxj7rMco6RNYsVcNwuGAIlfWu64.jpg',
            name: 'Maestro',
            date: 'Nov 22, 2023',
            statistical: random(10, 100),
        },
        {
            id: 4,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg',
            name: 'Đêm Yên Lặng',
            date: 'Nov 30, 2023',
            statistical: random(10, 100),
        },
        {
            id: 4,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/sjLLA6PGxoN0kmCuwxgb8CR0F29.jpg',
            name: 'Aquaman và Vương Quốc Thất Lạc',
            date: 'Dec 20, 2023',
            statistical: random(10, 100),
        },
        {
            id: 4,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/2r0nLLGFxXfKd8oRb4PWoy35osn.jpg',
            name: 'Kế Hoạch Bảo Vệ Gia Đình - The Family Plan',
            date: 'Dec 14, 2023',
            statistical: random(10, 100),
        },
        {
            id: 4,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/4YIAX1XGcdVwtvYpqj1w79EvMLE.jpg',
            name: 'Phi Đội Gà Bay 2: Âm Mưu Gà Nugget',
            date: 'Dec 08, 2023',
            statistical: random(10, 100),
        },
        {
            id: 4,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/pyVuoZzw2mpBmcYE8sb5EB8NwJ6.jpg',
            name: 'Wonka',
            date: 'Dec 06, 2023',
            statistical: random(10, 100),

        },
        {
            id: 4,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/eLOLQ7U6LrDYZ2ysN9NYkD0xGyw.jpg',
            name: 'South Park (Not Suitable for Children)',
            date: 'Dec 20, 2023',
            statistical: random(10, 100),

        },
        {
            id: 4,
            image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/90D6sXfbXKhDpd4S1cHICdAe8VD.jpg',
            name: 'Finestkind',
            date: 'Sep 08, 2023',
            statistical: random(10, 100),

        },
    ];
    const popularRight = [
        {
            notification: 'This panel didn\'t return any results. Try refreshing it.'
        }
    ];
    return res.json({ code: 200, msg: "trending is success", data: [popularLeft, popularRight] });
}

const join = (req, res) => {
    const listJoin = [
        {
            image: 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces_filter(duotone,190235,ad47dd)/lMnoYqPIAVL0YaLP5YjRy7iwaYv.jpg',
            title: 'Join Today',
            description: 'Get access to maintain your own custom personal lists, track what you\'ve seen and search and filter for what to watch next—regardless if it\'s in theatres, on TV or available on popular streaming services like .',
            signup: 'Sign up',
            tip1: 'Enjoy Himawari ad free',
            tip2: 'Maintain a personal watchlist',
            tip3: 'Filter by your subscribed streaming services and find something to watch',
            tip4: 'Log the movies and TV shows you\'ve seen',
            tip5: 'Build custom lists',
            tip6: 'Contribute to and improve our database',
        }
    ]
    return res.json({ code: 200, msg: "join is success", data: listJoin });
}

const progress = (req, res) => {
    let tenArray = ["An", "Binh", "Chi", "Dung", "Hoa", "Khanh", "Minh", "Nam", "Quyen", "Tuan"];
    function randomName() {
        let randomIndex = Math.floor(Math.random() * tenArray.length);
        return tenArray[randomIndex];
    }


    const listProgressRight = [
        {
            image: 'https://www.themoviedb.org/t/p/w64_and_h64_face/b6JFYmPdGWww0bD0YzJCRTAZ3kt.png',
            name: randomName(),
            statisticalAllTime: random(10, 100),
            statisticalThisWeek: random(10, 100),
        },
        {
            image: 'https://www.themoviedb.org/t/p/w64_and_h64_face/b6JFYmPdGWww0bD0YzJCRTAZ3kt.png',
            name: randomName(),
            statisticalAllTime: random(10, 100),
            statisticalThisWeek: random(10, 100),
        },
        {
            image: 'https://www.themoviedb.org/t/p/w64_and_h64_face/b6JFYmPdGWww0bD0YzJCRTAZ3kt.png',
            name: randomName(),
            statisticalAllTime: random(10, 100),
            statisticalThisWeek: random(10, 100),
        },
        {
            image: 'https://www.themoviedb.org/t/p/w64_and_h64_face/b6JFYmPdGWww0bD0YzJCRTAZ3kt.png',
            name: randomName(),
            statisticalAllTime: random(10, 100),
            statisticalThisWeek: random(10, 100),
        },
    ];

    const listProgressLeft = [
        {
            image: 'https://www.themoviedb.org/t/p/w64_and_h64_face/b6JFYmPdGWww0bD0YzJCRTAZ3kt.png',
            name: randomName(),
            statisticalAllTime: random(10, 100),
            statisticalThisWeek: random(10, 100),
        },
        {
            image: 'https://www.themoviedb.org/t/p/w64_and_h64_face/b6JFYmPdGWww0bD0YzJCRTAZ3kt.png',
            name: randomName(),
            statisticalAllTime: random(10, 100),
            statisticalThisWeek: random(10, 100),
        },
        {
            image: 'https://www.themoviedb.org/t/p/w64_and_h64_face/b6JFYmPdGWww0bD0YzJCRTAZ3kt.png',
            name: randomName(),
            statisticalAllTime: random(10, 100),
            statisticalThisWeek: random(10, 100),
        },
        {
            image: 'https://www.themoviedb.org/t/p/w64_and_h64_face/b6JFYmPdGWww0bD0YzJCRTAZ3kt.png',
            name: randomName(),
            statisticalAllTime: random(10, 100),
            statisticalThisWeek: random(10, 100),
        },
    ]
    return res.json({ code: 200, msg: "progress is success", data: [listProgressRight, listProgressLeft] });
}

const getPosts = async (req, res) => {
    const posts = await BlogPost.find();
    return res.json(posts)
}

const createPost = async (req, res) => {
    const payload = req.body
    const post = await BlogPost.create({
        title: payload.title,
        body: payload.body,
        date: new Date(),
    });
    return res.json(post)
}

const getListFilms = () => {

}

const createFilm = () => {

}
module.exports = {
    homePage,
    menu,
    banners,
    trending,
    trailers,
    popular,
    join,
    progress,
    getPosts,
    createPost
}
