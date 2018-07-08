var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    
    render: function() {
        return (React.createElement('h2', {}, this.props.title))
    }
});

var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    
    render: function() {
        return (React.createElement('p', {}, this.props.desc))
    }
});

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    
    render: function() {
        return (React.createElement('li', {},
            React.createElement(MovieTitle, {title: this.props.movie.title}),
            React.createElement(MovieDesc, {desc: this.props.movie.desc}),
            React.createElement('img', {src: this.props.movie.img})
            )
        )
    }
});

var MovieList = React.createClass ({
    propTypes: {
        list: React.PropTypes.array.isRequired,
    },
    
    render: function() {
        return (React.createElement('ul', {}, moviesElements))
    }
});

var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: 'http://thefairytalesite.net/wp-content/uploads/2012/11/Harry-Potter-and-The-Prisoner-of-Azkaban-harry-james-potter-9649892-1024-7681.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        img: 'https://vignette.wikia.nocookie.net/tlk/images/9/98/Kr%C3%B3l_Lew_wszystkie_postacie.png/revision/latest/scale-to-width-down/640?cb=20160722192416&path-prefix=pl'
    },
    {
        id: 3,
        title: 'Titanic',
        desc: 'Film o zatonięciu statku',
        img: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
        id: 4,
        title: 'Kołysanka',
        desc: 'Film o wampirach',
        img: 'https://static.intelimedia.pl/sub/Kolysanka-bc21209.jpg'
    },
    {
        id: 5,
        title: 'Czerwony kapturek - prawdziwa historia',
        desc: 'Film o dziewczynce w czerwonym kapturku',
        img: 'https://f.allegroimg.com/s512/014ab2/786f639e45398a152ba72b687aef'
    }
];

var moviesElements = movies.map(function(movie, i) {
    return React.createElement(Movie, {movie: movie, key: movie.id});
});

var element = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement(MovieList, {list: moviesElements})
    );

ReactDOM.render(element, document.getElementById('app'));