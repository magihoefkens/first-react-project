import Header from "./components/Header.tsx";
import Post from "./components/Post.tsx";
import Sidebar from "./components/Sidebar.tsx";
import Footer from "./components/Footer.tsx";


export default function Blog(){
    //Platz für Code
    return(
        //Anzeige von HTML ELEMENTE

        <div>
            <Header />
            <main>
                <section className="container">
                    <Post title="Hund im Schnee" content="Wie kann ich ein Hund vom Schnee befreien?" />
                    <img src="src/images/IMG_2774.jpeg"
                         alt="Dog in snow" height="300" width="200" />
                </section>
                <Sidebar />
            </main>
            <Footer />
        </div>

    )
}