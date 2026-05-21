import LinksManager from "./LinksManager";
import ProfileForm from "./ProfileForm";
import ThemeSelector from "./ThemeSelector";

const EditorPanel = () => {
  return (
    <div className="space-y-6">
      <ProfileForm />

      <LinksManager />

      <ThemeSelector />
    </div>
  );
};

export default EditorPanel;
