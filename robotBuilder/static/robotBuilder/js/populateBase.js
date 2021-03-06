function populateBase(t) {
    // input: tab object.
    // TODO: fill out this function so that the div t.div contains the mechanical interface.
    t.allowDuplicates = true;
    t.inputStubs = {};
    t.paramStubs = {};
    t.rootBlock;
    t.mangler = "@@name@@";
    t.sessionName = "untitled";
    t.newSession = true;

    t.startBlocks = document.createElement("xml");
    t.startBlocks.innerHTML = '<block type="component_create"></block>';
    t.startBlocks.style.display = "none";

    createToolbox(t);
    t.workspace = Blockly.inject(t.id, {
        toolbox: t.Toolbox.xmlTree
    });
    createIndexEvents(t);
    addIndexEvents(t);
    addPorts(t);


    // An href with #key trigers an AJAX call to retrieve saved blocks.
    // if ('BlocklyStorage' in window && window.location.hash.length > 1) {
    //     BlocklyStorage.retrieveXml(window.location.hash.substring(1));
    // }

    Blockly.Xml.domToWorkspace(t.startBlocks, t.workspace);
}

