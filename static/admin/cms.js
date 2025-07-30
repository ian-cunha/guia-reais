import CMS from "decap-cms-app";

const FolderWidget = {
    name: "folder",
    control: ({ value, onChange }) => (
        <div>
            <label>Subpasta</label>
            <input
                type="text"
                value={value || ""}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Digite o nome da subpasta (ex.: iniciantes)"
            />
        </div>
    ),
    preview: ({ value }) => <span>{value || "Nenhuma subpasta selecionada"}</span>,
};

CMS.registerWidget(FolderWidget);