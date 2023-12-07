const router = require('../router/router');

const homePage = (req, res) => {
    // vis du se query tu databases, ta nhan duoc danh sach nay
    // TODO: lam viec voi database
    const listFilms = [
        {
            id: 1,
            title: 'Harry portter 1',
            description: 'Phim harry portter raats la hay',
            author: 'Tac gia',
            image_preview: '',
            video_preview: '',
            catgegories: ['actions', 'adventure'],
            actors: ['Harry', 'nMarri'],
            created_date: new Date(),
        },
        {
            id: 1,
            title: 'Harry portter 2',
            description: 'Phim harry portter raats la hay',
            author: 'Tac gia',
            image_preview: '',
            video_preview: '',
            catgegories: ['actions', 'adventure'],
            actors: ['Harry', 'nMarri'],
            created_date: new Date(),
        }
    ]
    return res.json({ code: 200, msg: 'Success', data: listFilms })
};

const menu = (req, res) => {
    const listMenu = {

    }


    return res.json({ code: 200, msg: 'Success', data: null });
};

const banners = (req, res) => {
    return res.json({ code: 200, msg: "success", data: null });
};

module.exports = {
    homePage,
    menu,
    banners,
}
