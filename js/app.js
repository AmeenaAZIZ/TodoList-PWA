import checkConnectivity from '/js/components/connection/connection.js';
import AppTodo from '/js/components/todo/todo.js';
import { openDB } from '/node_modules/idb/build/esm/index.js';


(async function(document) {


	checkConnectivity();
	document.addEventListener('connection-changed', ({ detail }) => {
		console.log(detail);
	});


	try {
		const data = await fetch('/data/spacex.json');
		const json = await data.json();

		console.log(json);

		const database = await openDB('app-store', 1, {
			upgrade(db) {
				db.createObjectStore('todo');
			}
		});

		if (navigator.onLine) {
			await database.put('todo', json, 'todo');
		}
		const todo = await database.get('todo', 'todo');




	} catch(error) {
		console.error(error);
	}
})(document);