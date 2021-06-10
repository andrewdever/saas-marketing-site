import S from "@sanity/desk-tool/structure-builder";

import { VscListTree, VscSettingsGear, VscAccount, VscCircuitBoard, VscGroupByRefType, VscLink, VscGithubAction, VscFile, VscNote, VscPreview } from "react-icons/vsc";

export const getDefaultDocumentNode = (props) => {
    /**
     * Here you can define fallback views for document types without
     * a structure definition for the document node. If you want different
     * fallbacks for different types, or document values (e.g. if there is a slug present)
     * you can set up that logic in here too.
     * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
     */
    const { schemaType } = props;
    if (schemaType == "page") {
      return S.document().views([
        S.view.form(),
        S.view
          .component(IframePreview)
          .title("Web preview")
          .options({ previewURL }),
      ]);
    }
    return S.document().views([S.view.form()]);
};

/**
 * If you want to hide certain docTypes:
 * const hiddenDocTypes = listItem = !['docToHide',].includes(listItem.getId())
 */

/**
 * The below defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

 export default () =>
 S.list()
   .title("Content")
   .items([
        S.listItem()
            .title("Blog Posts")
            .icon(VscFile)
            .schemaType("blogpost")
            .child(S.documentTypeList("blogpost").title("Blog Posts")),
        S.listItem()
          .title("Landing Pages")
          .icon(VscFile)
          .schemaType("landingpage")
          .child(S.documentTypeList("landingpage").title("Landing Pages")),
        S.divider(),
        S.listItem()
          .title("Core Pages")
          .icon(VscFile)
          .schemaType("corepage")
          .child(S.documentTypeList("corepage").title("Core Pages")),
        S.divider(),
        S.listItem()
        .title("Site Settings")
        .icon(VscSettingsGear)
        .child(
            S.editor()
            .id("site")
            .schemaType("site")
            .documentId("site") // singleton of document type
        )
    ])