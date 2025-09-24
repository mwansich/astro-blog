import DOMpurify from 'dompurify';
import Fuse from 'fuse.js';

        let SEARCH_DATA: any;
        let FUSE_INSTANCE: any;

        const search = document.querySelector('#search') as HTMLInputElement | null;
        const searchReadout = document.querySelector('#search-readout');
        const searchResultsList = document.querySelector('#results-container');

        function updateDocumentTitle(search: string) {
            if (search && search.length > 0) {
                document.title = `Search results for "${search}"`;
            } else {
                document.title = 'Search';
                }
        }
        
        function updateSearchReadout(search: string) {
                if (search && search.length > 0) {
                    if (searchReadout) {
                        searchReadout.textContent = `Search results for "${search}"`;
                    }
                } else {
                    if (searchReadout) {
                        searchReadout.textContent = '';
                    }
                }
            
        }

        function updateSearchPageURL(search: string){
            const newURL = new URL(window.location.href);
            if (search && search.length > 0) {
                newURL.searchParams.set('q', search);
            } else {
                newURL.searchParams.delete('q');
            }
            window.history.replaceState({}, '', newURL.toString());
        }

        function generateSearchResultsHTML(results: any) {
            return results.map((result: any) => {
                const { title, date, slug, description, tags } = result.item;
                return `
                    <a href="/posts/${slug}" class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                        <h3 class="mb-1">${title}</h3>
                        <small class="text-muted">${date}</small>
                        </div>
                        <p class="mb-1">${description || ''}</p>
                        <small class="text-muted">Tags: ${tags ? tags.join(', ') : 'None'}</small>
                    </a>
                `;
            }).join('');
        }

        async function fetchSearchResults(search: string) {
            try {
                if (!search || search.length === 0) return; 
                if (!SEARCH_DATA) {
                const results = await fetch("/search.json");
                if (!results.ok) {
                    throw new Error(`HTTP error! status: ${results.status}`);
                }
                const data = await results.json();
                SEARCH_DATA = data;
                }
        } catch (error) {
                console.error('Error fetching search results:', error);
                return [];
            }

            if (SEARCH_DATA && !FUSE_INSTANCE) {
                FUSE_INSTANCE = new Fuse(SEARCH_DATA, {
                    keys: [
                        {
                            name: 'slug',
                            weight: 0.3
                        }, 
                        {
                            name: 'description',
                            weight: 0.7
                        }, 
                        {
                            name: 'tags',
                            weight: 0.8
                        }, 
                        {
                            name: 'title', 
                            weight: 1.0
                        },
                        {
                            name: 'date',
                            weight: 0.9
                }],
                    includeScore: true,
                    shouldSort: true,
                    minMatchCharLength: 2,
                    threshold: 0.0,
                    ignoreLocation: true,
                });
            }

            if (!FUSE_INSTANCE) return;
            const searchResults = FUSE_INSTANCE.search(search);
            
            if (searchResultsList) {
                searchResultsList.innerHTML = 
                    searchResults.length > 0
                    ? generateSearchResultsHTML(searchResults)
                    : '<div class="text-center text-muted">No results found.</div>';
            }
            
        }

        window.addEventListener('DOMContentLoaded', () => {
            const params = new URLSearchParams(window.location.search);
            const query = DOMpurify.sanitize(params.get('q') || '');
            fetchSearchResults(query);
            updateDocumentTitle(query);
            updateSearchReadout(query);
                if (search) {
                    search.value = query || '';
                    search.focus();
                }
            }
        );

        if (search) {
            search.addEventListener('input', () => {
                const searchTerm = DOMpurify.sanitize(search.value);
                updateDocumentTitle(searchTerm);
                updateSearchReadout(searchTerm);
                fetchSearchResults(searchTerm);
                updateSearchPageURL(searchTerm);
            });
        }
        