//  {albums.map(({ id, name, url }) => (
//      <iframe
//        key={id}
//        src={url}
//        width="300"
//        height="380"
//        frameborder="0"
//        allowtransparency="true"
//        allow="encrypted-media"
//        aria-label={`Listen to album ${name}`}
//      >
//      </iframe>
//  ))}
//
// const readJson = () => {
//     fetch('./spotify.json')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("HTTP error " + response.status);
//         }
//         return response.json();
//     })
//     .then(json => {
//         this.albums = json;
//         console.log(this.albums);
//
//         for (i=0; i < albums.length; i++) {
//             return (
//                 <iframe
//                 key={id}
//                 src={url}
//                 width="300"
//                 height="380"
//                 frameborder="0"
//                 allowtransparency="true"
//                 allow="encrypted-media"
//                 aria-label={`Listen to album ${name}`}
//                 >
//                 </iframe>
//             )
//         }
//     })
//     .catch(function () {
//         this.dataError = true;
//     })
// };
//
// readJson();
