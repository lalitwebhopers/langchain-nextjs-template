import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">Webhopers IT Solutions</h1>
      <ul>
        <li className="text-l">
          🤝
          <span className="ml-2">
            Welcome to Webhopers, your trusted partner for innovative IT
            solutions.
          </span>
        </li>
        <li className="hidden text-l md:block">
          💻
          <span className="ml-2">
            Our team of experts is dedicated to providing top-notch services to
            meet your business needs.
          </span>
        </li>
        <li>
          📞
          <span className="ml-2">
            Get in touch with us to learn more about our services and how we can
            help your business thrive.
          </span>
        </li>
        <li className="hidden text-l md:block">
          📈
          <span className="ml-2">
            From software development to IT consulting, we've got you covered.
          </span>
        </li>
        <li className="text-l">
          👇
          <span className="ml-2">
            Try asking e.g. <code>What services does Webhopers offer?</code>{" "}
            below!
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat"
      emoji="📞"
      titleText="Webhopers Support"
      placeholder="Ask us about our IT services!"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
