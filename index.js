// you need to create a new div for each album and append it to the spotify row div

let dataExport;

function grabData(returnData) {
    fetch("./spotify.json")
    .then(response => {
        return response.json().then(function(data) {
            returnData = JSON.parse(data);
            {data.map(({ id, name, url }) => (
                <iframe
                  key={id}
                  src={url}
                  width="300" 
                  height="380" 
                  frameborder="0" 
                  allowtransparency="true" 
                  allow="encrypted-media"
                  aria-label={`Listen to album ${name}`}
                >
                </iframe>
            ))};
            console.log(returnData);
        });
    })
}

grabData(dataExport);