const SUPABASE_URL = 'https://osvbnemrpkxnsdboazbe.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwODkwMywiZXhwIjoxOTU1MDg0OTAzfQ.WbfpkieH6xyID6pt237Vr_Y78Fs1wnkmUdHXoHg5twU';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


export async function createItem(amount, item){
    const response = await client
        .from('list')
        .insert([{
            item:item,
            amount:amount,
        }])
        
        .single();
       
    return checkError(response);
}

export async function getItems(id){
    const response = await client
        .from('list')
        .select()
        .match({ id: id });
console.log(id)
    return checkError(response);
    
}

export async function deleteList(){
    const response = await client
        .from('list')
        .delete('item');
        
    return checkError(response);

}


export async function getUser() {
    return client.auth.session();
}


export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../'); 
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('./shopping-list');
    }
}

export async function signupUser(email, password){
    const response = await client.auth.signUp({ email, password });
    
    return response.user;
}

export async function signInUser(email, password){
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '../';
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
