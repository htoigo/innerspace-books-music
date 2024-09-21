import bcrypt from 'bcryptjs';

// MongoDB Database
//
// Project:  Project0
//
// Database users:
//   Username            Password                    Role
//   admin               ManagingTheM0ng0e$          atlasAdmin@admin
//   innerspace          Th1nk1ng1sTheBestW@y        readWriteAnyDatabase@admin
//
// Cluster:   Cluster0
// Database:  innerspace

// Initial seed data for the MondoDB database:

const data = {
  users: [
    {
      name: 'Harry Toigo',
      email: 'admin@innerspace.com',
      password: bcrypt.hashSync('To the Moon!', 8),
      isAdmin: true,
    },
    {
      name: 'Michelle Dan Liu',
      email: 'michelle@comcast.net',
      password: bcrypt.hashSync('Seven sisters', 8),
      isAdmin: false,
    },
    {
      name: 'Lee E. Bernard',
      email: 'lee@stickersignlabel.com',
      password: bcrypt.hashSync('L33b0 1s My N@me', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      productType: 'Books',
      category: 'Literature',
      name: 'A Christmas Carol (Paperback)',
      title: 'A Christmas Carol',
      format: 'Paperback',
      author: 'Charles Dickens',
      publisher: 'Tole Classics',
      publicationDate: '2019-10-29',
      image: '/images/p1-front.jpg',
      price: 5.89,
      numInStock: 350,
      rating: 4.8,
      numReviews: 7341,
      description:
        "A new and beautiful edition of A Christmas Carol by Charles Dickens first published in 1843 with John Leech's illustrations. Tole Publishing is pleased to offer this classic book with a modern touch.",
    },
    {
      productType: 'Books',
      category: 'Literature',
      name: 'The Old Curiosity Shop (Paperback)',
      title: 'The Old Curiosity Shop',
      format: 'Paperback',
      author: 'Charles Dickens',
      publisher: 'Penguin Classics',
      publicationDate: '2001-07-01',
      image: '/images/p2-front.jpg',
      price: 13.0,
      numInStock: 265,
      rating: 4.1,
      numReviews: 5327,
      description:
        'The story of Little Nell and her "tragedy of sorrows," told in a blend of realism and fairy-tale. This sensational bestselling story of Little Nell, the beautiful child thrown into a shadowy, terrifying world, seems to belong less to the history of the Victorian novel than to folklore, fairy tale, or myth.',
    },
    {
      productType: 'Books',
      category: 'Science-Physics',
      name: 'A Brief History of Time (Hardcover)',
      title: 'A Brief History of Time',
      format: 'Hardcover',
      author: 'Stephen Hawking',
      publisher: 'Bantam',
      publicationDate: '1998-09-01',
      image: '/images/p3-front.jpg',
      price: 7.55,
      numInStock: 274,
      rating: 3.9,
      numReviews: 7047,
      description:
        "A landmark volume in science writing by one of the great minds of our time, Stephen Hawking's book explores such profound questions as: How did the universe begin--and what made its start possible? Does time always flow forward? Is the universe unending--or are there boundaries? Are there other dimensions in space? What will happen when it all ends?",
    },
    {
      productType: 'Books',
      category: 'Literature',
      name: 'Brave New World (Large Print / Paperback)',
      title: 'Brave New World',
      format: 'Large Print / Paperback',
      author: 'Aldous Huxley',
      publisher: 'Tole Classics',
      publicationDate: '2019-10-29',
      image: '/images/p4-front.jpg',
      price: 5.89,
      numInStock: 350,
      rating: 5.0,
      numReviews: 10241,
      description:
        "Aldous Huxley's profoundly important classic of world literature, Brave New World is a searching vision of an unequal, techologically-advanced future where humans are genetically bred, socially indoctrinated, and pharmaceutically anesthetized to passively uphold an authoritarian ruling order, all at the cost of our freedom, full humanity, and perhaps also our souls. A genius who spent his life decrying the onward march of the Machine, Huxley was a man of incomparable talents: equally an artist, a spiritual seeker, and one of history's keenest observers of human nature and civilization.",
    },
    {
      productType: 'Music',
      category: 'CDs & Vinyl',
      name: 'Yo-Yo Ma: The 6 Unaccompanied Cello Suites, J. S. Bach (Audio CD)',
      title: 'The 6 Unaccompanied Cello Suites Complete',
      format: 'Audio CD',
      artist: 'Yo-Yo Ma',
      composer: 'J. S. Bach',
      label: 'Sony Classical',
      publicationDate: '2010-06-06',
      image: '/images/p5-front.jpg',
      price: 11.19,
      numInStock: 0,
      rating: 3.3,
      numReviews: 427,
      description:
        "Ma's readings of Bach are fairly liberal in rhythm and phrasing and are decidedly more intuitive than analytical, with plenty of rubato and elongation of lines to suggest something like a free Romantic interpretation, far from any Baroque period re-creation. There is a pensive quality to these performances and Ma delivers a technically polished and intelligent performance that has grace and elegance.",
    },
    {
      productType: 'Music',
      category: 'CDs & Vinyl',
      name: 'Beethoven: Piano Concerto No. 5 "Emperor" - Alfred Brendel (Audio CD)',
      title: 'Beethoven: Piano Concerto No. 5 "Emperor"',
      format: 'Audio CD',
      artist: 'Alfred Brendel',
      composer: 'Ludwig van Beethoven',
      label: 'Decca',
      publicationDate: '2007-01-27',
      image: '/images/p6-front.jpg',
      price: 6.99,
      numInStock: 155,
      rating: 4.9,
      numReviews: 29,
      description:
        "An erudite and extremely intelligent performance of Beethoven's mighty fifth piano concerto paired with a stunning interpretation of the long-drawn-out slowly developing Choral Fantasia, with its foreshadowings of the incomparable ninth symphony to come.",
    },
  ],
};

export default data;
