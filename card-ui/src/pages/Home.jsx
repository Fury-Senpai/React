import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
    return (
        <section className="flex flex-col gap-10">
            {/* <Header /> */}
            <Header />
            {/* PAGE */}
            <div className="w-full flex justify-between">
                {/* nav left */}
                <div >
                    <h1 className="text-4xl font-bold text-(--color-primary)">COLLECTION</h1>
                </div>
                {/* nav right */}
                <div>
                    <ul className="flex gap-4">
                        <CustomButton className="bg-transparent border-2 border-white px-4 py-2 rounded-3xl text-xs" txt={"ALL"} />
                        <CustomButton className="bg-transparent border-2 border-white px-4 py-2 rounded-3xl text-xs" txt={"LISTED"} />
                        <CustomButton className="bg-transparent border-2 border-white px-4 py-2 rounded-3xl text-xs" txt={"NEW"} />
                        <CustomButton className="bg-transparent border-2 border-white px-4 py-2 rounded-3xl text-xs" txt={"LIMITED ADDITION"} />
                        <CustomButton className="bg-transparent border-2 border-white px-4 py-2 rounded-3xl text-xs" txt={"OFFERS"} />
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-5 grid-rows-1 gap-5">
                <Card imgSrc="https://i.pinimg.com/1200x/af/af/04/afaf04f57c0eac2e617209423186d340.jpg" name="PHONK XOX"/>
                <Card imgSrc="https://i.pinimg.com/736x/44/37/dd/4437dd01d6464f64c155270d326c0d26.jpg" name="JEFFERY"/>
                <Card imgSrc="https://i.pinimg.com/736x/df/54/32/df543236d40a09cf4123df289459ea7f.jpg" name="YEAT" />
                <Card imgSrc="https://i.pinimg.com/736x/62/c5/b2/62c5b2428e065a44bcf993a7c1ffb66b.jpg" name="SUMARAI MONK" />
                <Card imgSrc="https://i.pinimg.com/736x/df/54/32/df543236d40a09cf4123df289459ea7f.jpg" name="SUGO GEI" />
                <Card imgSrc="https://i.pinimg.com/1200x/4b/44/43/4b44435231c7577aecce1202a5237839.jpg" name="MONK EYY" />
                <Card imgSrc="https://i.pinimg.com/736x/6d/f9/91/6df9911cb9820131f1811385ecf44a7a.jpg" name="JSON" />
                <Card imgSrc="https://i.pinimg.com/736x/b9/d2/dc/b9d2dcd110159999f7c74994020473e7.jpg" name="DEVIL BUNNY" />
                <Card imgSrc="https://i.pinimg.com/736x/7c/51/05/7c5105481245d3070095445fd30ed43c.jpg" name="ANGEL BUNNY" />
                <Card imgSrc="https://i.pinimg.com/736x/4c/53/42/4c5342dd38e0914230963d73a49faa4f.jpg" name="SHY JSON" />
                <Card imgSrc="https://i.pinimg.com/736x/4c/53/42/4c5342dd38e0914230963d73a49faa4f.jpg" name="SHY JSON" />
            </div>
            <Footer />
        </section>
    )
}

export default Home;