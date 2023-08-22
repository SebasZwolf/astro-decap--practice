const data = {
	foo : 'bar',
};


export async function get() : Promise<{ body: string; }> {
	return {
	  body: await Promise.resolve(JSON.stringify(data)),
	};
}