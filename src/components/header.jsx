import Sidebar from "./Sidebar"

export default function Header() {
    return (
        <header id="top-header">
            <Sidebar />
            <img id="claude-pic" src="chef-claude-icon.png" alt="claude icon" />
            <h3 id="heading">
                Chef GPT
            </h3>
        </header>
    )
}