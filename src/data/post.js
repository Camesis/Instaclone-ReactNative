import { USERS } from './Users'

export const POSTS = [
    {
        imageUrl: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        user: USERS[1].user,
        likes: '1,234',
        caption: 'Code is life!  🐍',
        profile_picture: USERS[1].image,
        comments: [
            {
            user: 'amanda.dev',
            comment:"Once I wake up, I'll finally be ready to code this up!"
            }
        ]
    },
    {
        imageUrl: 'https://images.pexels.com/photos/3817675/pexels-photo-3817675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        user: USERS[3].user,
        likes: '7,852',
        caption: 'Breathing art everyday!',
        profile_picture: USERS[3].image,
        comments: [
            {
            user: 'tealoui123',
            comment: 'You were born for this, girl! 🤘'
            },
            {
            user: 'ptcrew',
            comment:"Rock it!"
            },
            {
                user: 'chloeadamslamp',
                comment:"Looks very therapeutic!"
                }
        ]
    },
    {
        imageUrl: 'https://images.pexels.com/photos/2042281/pexels-photo-2042281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        user: USERS[2].user,
        likes: '4,256',
        caption: 'In the old town road... 🏍',
        profile_picture: USERS[2].image,
        comments: [
            {
            user: 'jacklantern13',
            comment: 'look awesome!'
            },
            {
            user: 'viriatouis',
            comment:"Nice to see you happy, guy 😊"
            }
        ]
    }
]
