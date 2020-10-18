export default {
    serchQuery: '',
    page: 1,
    fetchImg() {
      const apiKey = '18710894-cf47c53574f7c60443851e774';
      const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.serchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;
  
      return fetch(url)
        .then(res => res.json())
        .then(({ hits }) => {
          this.page += 1;
          return hits;
        });
    },
    resetPage() {
      this.page = 1;
    },
    set query(value) {
      this.serchQuery = value;
    },
  };

