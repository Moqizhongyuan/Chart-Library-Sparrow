export const sports = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 }
]

export const negative = [
  { a: 'A', b: -28 },
  { a: 'B', b: 55 },
  { a: 'C', b: -33 },
  { a: 'D', b: 91 },
  { a: 'E', b: 81 },
  { a: 'F', b: 53 },
  { a: 'G', b: -19 },
  { a: 'H', b: 87 },
  { a: 'I', b: 52 }
]

export const rainfall = [
  { city: 'London', month: 'Jan.', rainfall: 18.9 },
  { city: 'London', month: 'Feb.', rainfall: 28.8 },
  { city: 'London', month: 'Mar.', rainfall: 39.3 },
  { city: 'London', month: 'Apr.', rainfall: 81.4 },
  { city: 'London', month: 'May', rainfall: 47 },
  { city: 'London', month: 'Jun.', rainfall: 20.3 },
  { city: 'London', month: 'Jul.', rainfall: 24 },
  { city: 'London', month: 'Aug.', rainfall: 35.6 },
  { city: 'Berlin', month: 'Jan.', rainfall: 12.4 },
  { city: 'Berlin', month: 'Feb.', rainfall: 23.2 },
  { city: 'Berlin', month: 'Mar.', rainfall: 34.5 },
  { city: 'Berlin', month: 'Apr.', rainfall: 99.7 },
  { city: 'Berlin', month: 'May', rainfall: 52.6 },
  { city: 'Berlin', month: 'Jun.', rainfall: 35.5 },
  { city: 'Berlin', month: 'Jul.', rainfall: 37.4 },
  { city: 'Berlin', month: 'Aug.', rainfall: 42.4 }
]

export const profit = [
  { month: 'Jan.', profit: 387264, start: 0, end: 387264 },
  { month: 'Feb.', profit: 772096, start: 387264, end: 1159360 },
  { month: 'Mar.', profit: 638075, start: 1159360, end: 1797435 },
  { month: 'Apr.', profit: -211386, start: 1797435, end: 1586049 },
  { month: 'May', profit: -138135, start: 1586049, end: 1447914 },
  { month: 'Jun', profit: -267238, start: 1447914, end: 1180676 },
  { month: 'Jul.', profit: 431406, start: 1180676, end: 1612082 },
  { month: 'Aug.', profit: 363018, start: 1612082, end: 1975100 },
  { month: 'Sep.', profit: -224638, start: 1975100, end: 1750462 },
  { month: 'Oct.', profit: -299867, start: 1750462, end: 1450595 },
  { month: 'Nov.', profit: 607365, start: 1450595, end: 2057960 },
  { month: 'Dec.', profit: 1106986, start: 2057960, end: 3164946 },
  { month: 'Total', start: 0, end: 3164946 }
]

function year(string) {
  const date = new Date()
  date.setFullYear(string)
  return date
}

export const line = [
  { year: year('1991'), value: 3 },
  { year: year('1992'), value: 4 },
  { year: year('1993'), value: 3.5 },
  { year: year('1994'), value: 5 },
  { year: year('1995'), value: 4.9 },
  { year: year('1996'), value: 6 },
  { year: year('1997'), value: 7 },
  { year: year('1998'), value: 9 },
  { year: year('1999'), value: 13 }
]

export const temperatures = [
  { month: 'Jan', city: 'Tokyo', temperature: 7 },
  { month: 'Jan', city: 'London', temperature: 3.9 },
  { month: 'Feb', city: 'Tokyo', temperature: 6.9 },
  { month: 'Feb', city: 'London', temperature: 4.2 },
  { month: 'Mar', city: 'Tokyo', temperature: 9.5 },
  { month: 'Mar', city: 'London', temperature: 5.7 },
  { month: 'Apr', city: 'Tokyo', temperature: 14.5 },
  { month: 'Apr', city: 'London', temperature: 8.5 },
  { month: 'May', city: 'Tokyo', temperature: 18.4 },
  { month: 'May', city: 'London', temperature: 11.9 },
  { month: 'Jun', city: 'Tokyo', temperature: 21.5 },
  { month: 'Jun', city: 'London', temperature: 15.2 },
  { month: 'Jul', city: 'Tokyo', temperature: 25.2 },
  { month: 'Jul', city: 'London', temperature: 17 },
  { month: 'Aug', city: 'Tokyo', temperature: 26.5 },
  { month: 'Aug', city: 'London', temperature: 16.6 },
  { month: 'Sep', city: 'Tokyo', temperature: 23.3 },
  { month: 'Sep', city: 'London', temperature: 14.2 },
  { month: 'Oct', city: 'Tokyo', temperature: 18.3 },
  { month: 'Oct', city: 'London', temperature: 10.3 },
  { month: 'Nov', city: 'Tokyo', temperature: 13.9 },
  { month: 'Nov', city: 'London', temperature: 6.6 },
  { month: 'Dec', city: 'Tokyo', temperature: 9.6 },
  { month: 'Dec', city: 'London', temperature: 4.8 }
]

export const users = [
  { item: 'Design', user: 'a', score: 70 },
  { item: 'Design', user: 'b', score: 30 },
  { item: 'Development', user: 'a', score: 60 },
  { item: 'Development', user: 'b', score: 70 },
  { item: 'Marketing', user: 'a', score: 50 },
  { item: 'Marketing', user: 'b', score: 60 },
  { item: 'Users', user: 'a', score: 40 },
  { item: 'Users', user: 'b', score: 50 },
  { item: 'Test', user: 'a', score: 60 },
  { item: 'Test', user: 'b', score: 70 },
  { item: 'Language', user: 'a', score: 70 },
  { item: 'Language', user: 'b', score: 50 },
  { item: 'Technology', user: 'a', score: 50 },
  { item: 'Technology', user: 'b', score: 40 },
  { item: 'Support', user: 'a', score: 30 },
  { item: 'Support', user: 'b', score: 40 },
  { item: 'Sales', user: 'a', score: 60 },
  { item: 'Sales', user: 'b', score: 40 },
  { item: 'UX', user: 'a', score: 50 },
  { item: 'UX', user: 'b', score: 60 }
]

export const countries = [
  { country: 'Europe', year: '1750', value: 163 },
  { country: 'Europe', year: '1800', value: 203 },
  { country: 'Europe', year: '1850', value: 276 },
  { country: 'Europe', year: '1900', value: 628 },
  { country: 'Europe', year: '1950', value: 547 },
  { country: 'Europe', year: '1999', value: 729 },
  { country: 'Europe', year: '2050', value: 408 },
  { country: 'Oceania', year: '1750', value: 200 },
  { country: 'Oceania', year: '1800', value: 200 },
  { country: 'Oceania', year: '1850', value: 200 },
  { country: 'Oceania', year: '1900', value: 460 },
  { country: 'Oceania', year: '1950', value: 230 },
  { country: 'Oceania', year: '1999', value: 300 },
  { country: 'Oceania', year: '2050', value: 300 },
  { country: 'Africa', year: '1750', value: 106 },
  { country: 'Africa', year: '1800', value: 107 },
  { country: 'Africa', year: '1850', value: 111 },
  { country: 'Africa', year: '1900', value: 1766 },
  { country: 'Africa', year: '1950', value: 221 },
  { country: 'Africa', year: '1999', value: 767 },
  { country: 'Africa', year: '2050', value: 133 },
  { country: 'Asia', year: '1750', value: 502 },
  { country: 'Asia', year: '1800', value: 635 },
  { country: 'Asia', year: '1850', value: 809 },
  { country: 'Asia', year: '1900', value: 5268 },
  { country: 'Asia', year: '1950', value: 4400 },
  { country: 'Asia', year: '1999', value: 3634 },
  { country: 'Asia', year: '2050', value: 947 }
]

export const heatmap = [
  { x: 0, y: 0, color: 10 },
  { x: 0, y: 1, color: 19 },
  { x: 0, y: 2, color: 8 },
  { x: 0, y: 3, color: 24 },
  { x: 0, y: 4, color: 67 },
  { x: 1, y: 0, color: 92 },
  { x: 1, y: 1, color: 58 },
  { x: 1, y: 2, color: 78 },
  { x: 1, y: 3, color: 117 },
  { x: 1, y: 4, color: 48 },
  { x: 2, y: 0, color: 35 },
  { x: 2, y: 1, color: 15 },
  { x: 2, y: 2, color: 123 },
  { x: 2, y: 3, color: 64 },
  { x: 2, y: 4, color: 52 },
  { x: 3, y: 0, color: 72 },
  { x: 3, y: 1, color: 132 },
  { x: 3, y: 2, color: 114 },
  { x: 3, y: 3, color: 19 },
  { x: 3, y: 4, color: 16 },
  { x: 4, y: 0, color: 38 },
  { x: 4, y: 1, color: 5 },
  { x: 4, y: 2, color: 8 },
  { x: 4, y: 3, color: 117 },
  { x: 4, y: 4, color: 115 },
  { x: 5, y: 0, color: 88 },
  { x: 5, y: 1, color: 32 },
  { x: 5, y: 2, color: 12 },
  { x: 5, y: 3, color: 6 },
  { x: 5, y: 4, color: 120 },
  { x: 6, y: 0, color: 13 },
  { x: 6, y: 1, color: 44 },
  { x: 6, y: 2, color: 88 },
  { x: 6, y: 3, color: 98 },
  { x: 6, y: 4, color: 96 },
  { x: 7, y: 0, color: 31 },
  { x: 7, y: 1, color: 1 },
  { x: 7, y: 2, color: 82 },
  { x: 7, y: 3, color: 32 },
  { x: 7, y: 4, color: 30 },
  { x: 8, y: 0, color: 85 },
  { x: 8, y: 1, color: 97 },
  { x: 8, y: 2, color: 123 },
  { x: 8, y: 3, color: 64 },
  { x: 8, y: 4, color: 84 },
  { x: 9, y: 0, color: 47 },
  { x: 9, y: 1, color: 114 },
  { x: 9, y: 2, color: 31 },
  { x: 9, y: 3, color: 48 },
  { x: 9, y: 4, color: 91 }
]

export const treemap = [
  {
    name: '分类 1',
    x: 0,
    y: 0.5283018867924528,
    x1: 0.47384890478319175,
    y1: 0
  },
  {
    name: '分类 2',
    x: 0,
    y: 1,
    x1: 0.47384890478319175,
    y1: 0.5283018867924528
  },
  {
    name: '分类 3',
    x: 0.47384890478319175,
    y: 0.3440951571792693,
    x1: 0.668719680789417,
    y1: 0
  },
  {
    name: '分类 4',
    x: 0.668719680789417,
    y: 0.3440951571792693,
    x1: 0.8505990717285606,
    y1: 0
  },
  {
    name: '分类 5',
    x: 0.8505990717285606,
    y: 0.3440951571792693,
    x1: 1,
    y1: 0
  },
  {
    name: '分类 6',
    x: 0.47384890478319175,
    y: 0.5649957519116398,
    x1: 0.6660964203431794,
    y1: 0.3440951571792693
  },
  {
    name: '分类 7',
    x: 0.6660964203431794,
    y: 0.5649957519116398,
    x1: 0.8482256456105361,
    y1: 0.3440951571792693
  },
  {
    name: '分类 8',
    x: 0.8482256456105361,
    y: 0.5649957519116398,
    x1: 1,
    y1: 0.3440951571792693
  },
  {
    name: '分类 9',
    x: 0.47384890478319175,
    y: 0.7749978027129171,
    x1: 0.6824595929257935,
    y1: 0.5649957519116398
  },
  {
    name: '分类 10',
    x: 0.47384890478319175,
    y: 0.9035704868769644,
    x1: 0.6824595929257935,
    y1: 0.7749978027129171
  },
  {
    name: '分类 11',
    x: 0.47384890478319175,
    y: 0.9999999999999999,
    x1: 0.6824595929257935,
    y1: 0.9035704868769644
  },
  {
    name: '分类 12',
    x: 0.6824595929257935,
    y: 0.7268905367988936,
    x1: 0.7929084301689957,
    y1: 0.5649957519116398
  },
  {
    name: '分类 13',
    x: 0.7929084301689957,
    y: 0.7268905367988936,
    x1: 0.9033572674121979,
    y1: 0.5649957519116398
  },
  {
    name: '分类 14',
    x: 0.9033572674121979,
    y: 0.7268905367988936,
    x1: 0.9999999999999999,
    y1: 0.5649957519116398
  },
  {
    name: '分类 15',
    x: 0.6824595929257935,
    y: 0.8179270245325957,
    x1: 0.8788763395696326,
    y1: 0.7268905367988936
  },
  {
    name: '分类 16',
    x: 0.6824595929257935,
    y: 0.9089635122662978,
    x1: 0.8788763395696326,
    y1: 0.8179270245325957
  },
  {
    name: '分类 17',
    x: 0.6824595929257935,
    y: 0.9999999999999999,
    x1: 0.8788763395696326,
    y1: 0.9089635122662978
  },
  {
    name: '分类 18',
    x: 0.8788763395696326,
    y: 0.8376105894479908,
    x1: 1,
    y1: 0.7268905367988936
  },
  {
    name: '分类 19',
    x: 0.8788763395696326,
    y: 0.9409493052538148,
    x1: 1,
    y1: 0.8376105894479908
  },
  {
    name: '分类 20',
    x: 0.8788763395696326,
    y: 1,
    x1: 1,
    y1: 0.9409493052538148
  }
]

export const facet = [
  { city: 'London', month: 'Jan.', rainfall: 18.9, type: 'a' },
  { city: 'London', month: 'Feb.', rainfall: 28.8, type: 'a' },
  { city: 'London', month: 'Mar.', rainfall: 39.3, type: 'a' },
  { city: 'London', month: 'Apr.', rainfall: 81.4, type: 'a' },
  { city: 'London', month: 'May', rainfall: 47, type: 'b' },
  { city: 'London', month: 'Jun.', rainfall: 20.3, type: 'b' },
  { city: 'London', month: 'Jul.', rainfall: 24, type: 'b' },
  { city: 'London', month: 'Aug.', rainfall: 35.6, type: 'b' },
  { city: 'Berlin', month: 'Jan.', rainfall: 12.4, type: 'a' },
  { city: 'Berlin', month: 'Feb.', rainfall: 23.2, type: 'a' },
  { city: 'Berlin', month: 'Mar.', rainfall: 34.5, type: 'a' },
  { city: 'Berlin', month: 'Apr.', rainfall: 99.7, type: 'a' },
  { city: 'Berlin', month: 'May', rainfall: 52.6, type: 'b' },
  { city: 'Berlin', month: 'Jun.', rainfall: 35.5, type: 'b' },
  { city: 'Berlin', month: 'Jul.', rainfall: 37.4, type: 'b' },
  { city: 'Berlin', month: 'Aug.', rainfall: 42.4, type: 'b' }
]
