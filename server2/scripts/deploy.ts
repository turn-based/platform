import ghpages from 'gh-pages';

ghpages.publish('.', {
    branch: 'server-builds',
    src: ['package.json', 'package-lock.json', 'dist/**/*'],
}, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('deployed');
    }
});
