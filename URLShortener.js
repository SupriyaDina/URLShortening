
const shortenUrl = async () => {
    const longUrl = document.getElementById('long-url').value;
    var data = {
           "domain" : "ewg7.short.gy",
           "originalURL": longUrl,
           "allowDuplicates": false
    };
    const response = await fetch('https://api.short.cm/links/public', {
        method: 'post',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': 'pk_Y3VdyuTWAkOJOvvx'
        },
        body: JSON.stringify(data)
    }).then(function(response) {
        return response.json();
    }) 
    .then(function(data){ 
        const shortUrl = data.shortURL;
        const shortUrlContainer = document.getElementById('short-url-container');
        const shortUrlLink = document.getElementById('short-url').querySelector('a');
        shortUrlLink.href = shortUrl;
        shortUrlLink.textContent = shortUrl;
        shortUrlContainer.style.display = 'block';
      
        const copyBtn = document.getElementById('copy-btn');
        copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText(shortUrl).then(() => {
            alert('Copied to clipboard!');
          });
        });
        console.log(shortUrl);
     })
  };
  
  const shortenBtn = document.getElementById('shorten-btn');
  shortenBtn.addEventListener('click', shortenUrl);
