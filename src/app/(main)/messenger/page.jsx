import ChatBody from "@/components/Messenger/ChatBody";
import ChatList from "@/components/Messenger/ChatList";

const Messenger = () => {
    return (
        <div>
            <section className="flex flex-col lg:grid grid-cols-12 container gap-8 pb-8">

                {/* left side  */}
                <div className="col-span-3  rounded">
                    <ChatList></ChatList>
                </div>

                {/* right site  */}
                <div className="col-span-6  rounded ">
                    <ChatBody></ChatBody>
                </div>

                <div className="col-span-3  rounded">
                    <ChatList></ChatList>
                </div>
            </section>
        </div>
    );
};

export default Messenger;