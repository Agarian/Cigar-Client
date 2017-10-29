(function(wHandle, wjQuery) {
    /*global navigator, Image, $*/
    var CONNECTION_URL = "127.0.0.1:443"; // Default Connection
    var SKIN_URL = "./skins/"; // Skin Directory
    wHandle.setServer = function(arg) {
        if (arg != gameMode) {
            CONNECTION_URL = arg;
            gameMode = arg;
            showConnecting();
        }
    };
    var touchable = 'createTouch' in document,
        touches = [],
        leftTouchID = -1,
        leftTouchPos = {x: 0, y: 0},
        leftTouchStartPos = {x: 0, y: 0},
        leftVector = {x: 0, y: 0},
        useHttps = "https:" == wHandle.location.protocol;
    function gameLoop() {
        connecting = 1;
        document.getElementById("canvas").focus();
        var isTyping = 0;
        var chattxt;
        mainCanvas = nCanvas = document.getElementById("canvas");
        ctx = mainCanvas.getContext("2d");
        mainCanvas.onmousemove = function(event) {
            rawMouseX = event.clientX;
            rawMouseY = event.clientY;
            mouseCoordChange();
        };
        if (touchable) {
            mainCanvas.addEventListener('touchstart', onTouchStart, 0);
            mainCanvas.addEventListener('touchmove', onTouchMove, 0);
            mainCanvas.addEventListener('touchend', onTouchEnd, 0);
        }
        mainCanvas.onmouseup = function() {};
        if (/firefox/i.test(navigator.userAgent)) {
            document.addEventListener("DOMMouseScroll", handleWheel, 0);
        } else {
            document.body.onmousewheel = handleWheel;
        }
        mainCanvas.onfocus = function() {
            isTyping = 0;
        };
        document.getElementById("chat_textbox").onblur = function() {
            isTyping = 0;
        };
        document.getElementById("chat_textbox").onfocus = function() {
            isTyping = 1;
        };
        var spacePressed = 0,
            qPressed = 0,
            ePressed = 0,
            rPressed = 0,
            tPressed = 0,
            wPressed = 0,
            pPressed = 0,
            oPressed = 0,
            mPressed = 0,
            yPressed = 0,
            uPressed = 0,
            kPressed = 0,
            iPressed = 0,
            lPressed = 0,
            hPressed = 0,
            zPressed = 0,
            xPressed = 0,
            sPressed = 0,
            cPressed = 0,
            gPressed = 0,
            jPressed = 0,
            bPressed = 0,
            vPressed = 0,
            nPressed = 0;
        wHandle.onkeydown = function(event) {
            if (hasOverlay) return;
            switch (event.keyCode) {
                case 32: // SPACE key
                    if (!spacePressed && !isTyping && !hasOverlay) {
                        sendMouseMove();
                        sendUint8(17);
                        spacePressed = 1;
                    }
                    break;
                case 81: // Q key
                    if (!qPressed && !isTyping && !hasOverlay) {
                        sendUint8(18);
                        qPressed = 1;
                    }
                    break;
                case 87: // W key
                    if (!wPressed && !isTyping && !hasOverlay) {
                        sendMouseMove();
                        sendUint8(21);
                    }
                    break;
                case 69: // E key
                    if (!ePressed && !isTyping && !hasOverlay) {
                        sendMouseMove();
                        sendUint8(22);
                    }
                    break;
                case 82: // R key
                    if (!rPressed && !isTyping && !hasOverlay) {
                        sendMouseMove();
                        sendUint8(23);
                    }
                    break;
                case 84: // T key
                    if (!tPressed && !isTyping && !hasOverlay) {
                        sendMouseMove();
                        sendUint8(24);
                        tPressed = 1;
                    }
                    break;
                case 80: // P key
                    if (!pPressed && !isTyping && !hasOverlay) {
                        sendMouseMove();
                        sendUint8(25);
                        pPressed = 1;
                    }
                    break;
                case 79: // O key
                    if (!oPressed && !isTyping && !hasOverlay) {
                        sendMouseMove();
                        sendUint8(26);
                        oPressed = 1;
                    }
                    break;
                case 77: // M key
                    if (!mPressed && !isTyping && !hasOverlay) {
                        sendMouseMove();
                        sendUint8(27);
                        mPressed = 1;
                    }
                    break;
                case 73: // I key
                    if (!iPressed && !isTyping && !hasOverlay) {
                        sendMouseMove();
                        sendUint8(28);
                        iPressed = 1;
                    }
                    break;
                case 89: // Y key
                    if (!yPressed && !isTyping && !hasOverlay) {
                        sendMouseMove();
                        sendUint8(30);
                    }
                    break;
                case 85: // U key
                    if (!uPressed && !isTyping && !hasOverlay) {
                        sendMouseMove();
                        sendUint8(31);
                    }
                    break;
                case 75: // K key
                    if (!kPressed && !isTyping && !hasOverlay) {
                        sendMouseMove();
                        sendUint8(29);
                        kPressed = 1;
                    }
                    break;
                case 76: // L key
                    if (!lPressed && !isTyping && !hasOverlay) {
                        sendMouseMove();
                        sendUint8(33);
                        lPressed = 1;
                    }
                    break;
                case 72: // H key
                    if (!hPressed && !isTyping && !hasOverlay) {
                        sendMouseMove();
                        sendUint8(34);
                        hPressed = 1;
                    }
                    break;
                case 90: // Z key
                    if (!zPressed && !isTyping && !hasOverlay) {
                        sendMouseMove();
                        sendUint8(35);
                    }
                    break;
                case 88: // X key
                    if (!xPressed && !isTyping && !hasOverlay) {
                        sendMouseMove();
                        sendUint8(36);
                        xPressed = 1;
                    }
                    break;
                case 83: // S key
                    if (!sPressed && !isTyping && !hasOverlay) {
                        sendMouseMove();
                        sendUint8(37);
                    }
                    break;
                case 67: // C key
                    if (!cPressed && !isTyping && !hasOverlay) {
                        sendMouseMove();
                        sendUint8(38);
                        cPressed = 1;
                    }
                    break;
                case 71: // J key
                    if (!jPressed && !isTyping && !hasOverlay) {
                        sendMouseMove();
                        sendUint8(39);
                    }
                    break;
                case 74: // G key
                    if (!gPressed && !isTyping && !hasOverlay) {
                        sendMouseMove();
                        sendUint8(40);
                    }
                    break;
                case 66: // B key
                    if (!bPressed && !isTyping && !hasOverlay) {
                        sendMouseMove();
                        sendUint8(41);
                        bPressed = 1;
                    }
                    break;
                case 86: // V key
                    if (!vPressed && !isTyping && !hasOverlay) {
                        sendMouseMove();
                        sendUint8(42);
                        vPressed = 1;
                    }
                    break;
                case 78: // N key
                    if (!nPressed && !isTyping && !hasOverlay) {
                        sendMouseMove();
                        sendUint8(43);
                        nPressed = 1;
                    }
                    break;
                case 13: // ENTER key
                    if (isTyping || hideChat) {
                        isTyping = 0;
                        document.getElementById("chat_textbox").blur();
                        chattxt = document.getElementById("chat_textbox").value;
                        if (chattxt.length > 0) sendChat(chattxt);
                        document.getElementById("chat_textbox").value = "";
                    } else {
                        if (!hasOverlay) {
                            document.getElementById("chat_textbox").focus();
                            isTyping = 1;
                        }
                    }
                    break;
                case 27: // ESC key
                    showOverlays(1);
                    wHandle.isSpectating = 0;
                    break;
            }
        };
        wHandle.onkeyup = function(event) {
            switch (event.keyCode) {
                case 32:
                    spacePressed = 0;
                    break;
                case 87:
                    wPressed = 0;
                    break;
                case 69:
                    ePressed = 0;
                    break;
                case 82:
                    rPressed = 0;
                    break;
                case 84:
                    tPressed = 0;
                    break;
                case 80:
                    pPressed = 0;
                    break;
                case 79:
                    oPressed = 0;
                    break;
                case 77:
                    mPressed = 0;
                    break;
                case 73:
                    iPressed = 0;
                    break;
                case 89:
                    yPressed = 0;
                    break;
                case 85:
                    uPressed = 0;
                    break;
                case 75:
                    kPressed = 0;
                    break;
                case 76:
                    lPressed = 0;
                    break;
                case 72:
                    hPressed = 0;
                    break;
                case 90:
                    zPressed = 0;
                    break;
                case 88:
                    xPressed = 0;
                    break;
                case 83:
                    sPressed = 0;
                    break;
                case 67:
                    cPressed = 0;
                    break;
                case 74:
                    gPressed = 0;
                    break;
                case 71:
                    jPressed = 0;
                    break;
                case 66:
                    bPressed = 0;
                    break;
                case 86:
                    vPressed = 0;
                    break;
                case 78:
                    nPressed = 0;
                    break;
                case 81:
                    if (qPressed) {
                        sendUint8(19);
                        qPressed = 0;
                    }
                    break;
            }
        };
        wHandle.onblur = function() {
            sendUint8(19);
            spacePressed = 0;
            qPressed = 0;
            ePressed = 0;
            rPressed = 0;
            tPressed = 0;
            wPressed = 0;
            pPressed = 0;
            oPressed = 0;
            mPressed = 0;
            yPressed = 0;
            uPressed = 0;
            kPressed = 0;
            iPressed = 0;
            lPressed = 0;
            hPressed = 0;
            zPressed = 0;
            xPressed = 0;
            sPressed = 0;
            cPressed = 0;
            gPressed = 0;
            jPressed = 0;
            bPressed = 0;
            vPressed = 0;
            nPressed = 0;
        };
        wHandle.onresize = canvasResize;
        canvasResize();
        if (wHandle.reqAnimFrame) {
            wHandle.reqAnimFrame(redrawGameScene);
        } else {
            setInterval(drawScene, 1E3 / 60);
        }
        setInterval(sendMouseMove, 40);
        null == ws && showConnecting();
        wjQuery("#overlays").show();
    }
    function onTouchStart(e) {
        for (var i = 0; i < e.changedTouches.length; i++) {
            var touch = e.changedTouches[i];
            if ((leftTouchID < 0) && (touch.clientX < canvasWidth / 2)) {
                leftTouchID = touch.identifier;
                leftTouchStartPos.reset(touch.clientX, touch.clientY);
                leftTouchPos.copyFrom(leftTouchStartPos);
                leftVector.reset(0, 0);
            }
            var size = ~~(canvasWidth / 7);
            if ((touch.clientX > canvasWidth - size) && (touch.clientY > canvasHeight - size)) {
                sendMouseMove();
                sendUint8(17); //split
            }
            if ((touch.clientX > canvasWidth - size) && (touch.clientY > canvasHeight - 2 * size - 10) && (touch.clientY < canvasHeight - size - 10)) {
                sendMouseMove();
                sendUint8(21); //eject
            }
        }
        touches = e.touches;
    }
    function onTouchMove(e) {
        e.preventDefault();
        for (var i = 0; i < e.changedTouches.length; i++) {
            var touch = e.changedTouches[i];
            if (leftTouchID == touch.identifier) {
                leftTouchPos.reset(touch.clientX, touch.clientY);
                leftVector.copyFrom(leftTouchPos);
                leftVector.minusEq(leftTouchStartPos);
                rawMouseX = leftVector.x * 3 + canvasWidth / 2;
                rawMouseY = leftVector.y * 3 + canvasHeight / 2;
                mouseCoordChange();
                sendMouseMove();
            }
        }
        touches = e.touches;
    }
    function onTouchEnd(e) {
        touches = e.touches;
        for (var i = 0; i < e.changedTouches.length; i++) {
            var touch = e.changedTouches[i];
            if (leftTouchID == touch.identifier) {
                leftTouchID = -1;
                leftVector.reset(0, 0);
                break;
            }
        }
    }
    function handleWheel(event) {
        zoom *= Math.pow(.9, event.wheelDelta / -120 || event.detail || 0);
        1 > zoom && (zoom = 1);
        zoom > 4 / viewZoom && (zoom = 4 / viewZoom);
    }
    function buildQTree() {
        if (.4 > viewZoom) qTree = null;
        else {
            var a = Number.POSITIVE_INFINITY,
                b = Number.POSITIVE_INFINITY,
                c = Number.NEGATIVE_INFINITY,
                d = Number.NEGATIVE_INFINITY,
                e = 0;
            for (var i = 0; i < nodelist.length; i++) {
                var node = nodelist[i];
                if (node.shouldRender() && !node.prepareData && 20 < node.size * viewZoom) {
                    e = Math.max(node.size, e);
                    a = Math.min(node.x, a);
                    b = Math.min(node.y, b);
                    c = Math.max(node.x, c);
                    d = Math.max(node.y, d);
                }
            }
            qTree = Quad.init({
                minX: a - (e + 100),
                minY: b - (e + 100),
                maxX: c + (e + 100),
                maxY: d + (e + 100),
                maxChildren: 2,
                maxDepth: 4
            });
            for (i = 0; i < nodelist.length; i++) {
                node = nodelist[i];
                if (node.shouldRender() && !(20 >= node.size * viewZoom)) {
                    for (a = 0; a < node.points.length; ++a) {
                        b = node.points[a].x;
                        c = node.points[a].y;
                        b < nodeX - canvasWidth / 2 / viewZoom || c < nodeY - canvasHeight / 2 / viewZoom || b > nodeX + canvasWidth / 2 / viewZoom || c > nodeY + canvasHeight / 2 / viewZoom || qTree.insert(node.points[a]);
                    }
                }
            }
        }
    }
    function mouseCoordChange() {
        X = (rawMouseX - canvasWidth / 2) / viewZoom + nodeX;
        Y = (rawMouseY - canvasHeight / 2) / viewZoom + nodeY;
    }
    function hideOverlays() {
        hasOverlay = 0;
        wjQuery("#adsBottom").hide();
        wjQuery("#overlays").hide();
    }
    function showOverlays(arg) {
        hasOverlay = 1;
        userNickName = null;
        wjQuery("#overlays").fadeIn(arg ? 200 : 3E3);
    }
    function showConnecting() {
        if (!connecting) return;
        wjQuery("#connecting").show();
        wsConnect((useHttps ? "wss://" : "ws://") + CONNECTION_URL);
    }
    function wsConnect(wsUrl) {
        if (ws) {
            ws.onopen = null;
            ws.onmessage = null;
            ws.onclose = null;
            try {
                ws.close();
            } catch (b) {}
            ws = null;
        }
        wsUrl = (useHttps ? "wss://" : "ws://") + CONNECTION_URL;
        nodesOnScreen = [];
        playerCells = [];
        nodes = {};
        nodelist = [];
        Cells = [];
        leaderBoard = [];
        mainCanvas = teamScores = null;
        userScore = 0;
        console.log("Connecting to " + wsUrl);
        ws = new WebSocket(wsUrl);
        ws.binaryType = "arraybuffer";
        ws.onopen = onWsOpen;
        ws.onmessage = onWsMSG;
        ws.onclose = onWsClose;
    }
    function prepareData(a) {
        return new DataView(new ArrayBuffer(a));
    }
    function wsSend(a) {
        ws.send(a.buffer);
    }
    function onWsOpen() {
        var msg;
        console.log("Socket open");
        delay = 500;
        wjQuery("#connecting").hide();
        msg = prepareData(5);
        msg.setUint8(0, 254);
        msg.setUint32(1, 5, 1); // Protcol 5
        wsSend(msg);
        msg = prepareData(5);
        msg.setUint8(0, 255);
        msg.setUint32(1, 1332175218, 1);
        wsSend(msg);
        sendNickName();
    }
    function onWsClose() {
        setTimeout(showConnecting, delay);
        console.log("Socket closed");
        delay *= 1.5;
    }
    function onWsMSG(msg) {
        handleWsMSG(new DataView(msg.data));
    }
    function handleWsMSG(msg) {
        function getString() {
            var text = '',
                char;
            while ((char = msg.getUint16(offset, 1)) != 0) {
                offset += 2;
                text += String.fromCharCode(char);
            }
            offset += 2;
            return text;
        }
        var offset = 0,
            setCustomLB = 0;
        240 == msg.getUint8(offset) && (offset += 5);
        switch (msg.getUint8(offset++)) {
            case 16: // update nodes
                updateNodes(msg, offset);
                break;
            case 17: // update position
                posX = msg.getFloat32(offset, 1);
                offset += 4;
                posY = msg.getFloat32(offset, 1);
                offset += 4;
                posSize = msg.getFloat32(offset, 1);
                offset += 4;
                break;
            case 20: // clear nodes
                playerCells = [];
                nodesOnScreen = [];
                break;
            case 21: // draw line
                lineX = msg.getInt16(offset, 1);
                offset += 2;
                lineY = msg.getInt16(offset, 1);
                offset += 2;
                if (!drawLine) {
                    drawLine = 1;
                    drawLineX = lineX;
                    drawLineY = lineY;
                }
                break;
            case 32: // add node
                nodesOnScreen.push(msg.getUint32(offset, 1));
                offset += 4;
                break;
            case 48: // update leaderboard (custom text)
                setCustomLB = 1;
                noRanking = 1;
                break;
            case 49: // update leaderboard (ffa)
                if (!setCustomLB) {
                    noRanking = 0;
                }
                teamScores = null;
                var LBplayerNum = msg.getUint32(offset, 1);
                offset += 4;
                leaderBoard = [];
                for (i = 0; i < LBplayerNum; ++i) {
                    var nodeId = msg.getUint32(offset, 1);
                    offset += 4;
                    leaderBoard.push({
                        id: nodeId,
                        name: getString()
                    });
                }
                drawLB();
                break;
            case 50: // update leaderboard (teams)
                teamScores = [];
                var LBteamNum = msg.getUint32(offset, 1);
                offset += 4;
                for (var i = 0; i < LBteamNum; ++i) {
                    teamScores.push(msg.getFloat32(offset, 1));
                    offset += 4;
                }
                drawLB();
                break;
            case 64: // set border
                leftPos = msg.getFloat64(offset, 1);
                offset += 8;
                topPos = msg.getFloat64(offset, 1);
                offset += 8;
                rightPos = msg.getFloat64(offset, 1);
                offset += 8;
                bottomPos = msg.getFloat64(offset, 1);
                offset += 8;
                posX = (rightPos + leftPos) / 2;
                posY = (bottomPos + topPos) / 2;
                posSize = 1;
                minX = leftPos;
                minY = topPos;
                maxX = rightPos;
                maxY = bottomPos;
                if (0 == playerCells.length) {
                    nodeX = posX;
                    nodeY = posY;
                    viewZoom = posSize;
                }
                break;
            case 99:
                addChat(msg, offset);
                break;
        }
    }
    function addChat(view, offset) {
        function getString() {
            var text = '',
                char;
            while ((char = view.getUint16(offset, 1)) != 0) {
                offset += 2;
                text += String.fromCharCode(char);
            }
            offset += 2;
            return text;
        }
        var flags = view.getUint8(offset++);
        // for future expansions
        if (flags & 2) {
            offset += 4;
        }
        if (flags & 4) {
            offset += 8;
        }
        if (flags & 8) {
            offset += 16;
        }
        var r = view.getUint8(offset++),
            g = view.getUint8(offset++),
            b = view.getUint8(offset++),
            color = (r << 16 | g << 8 | b).toString(16);
        while (color.length < 6) {
            color = '0' + color;
        }
        color = '#' + color;
        chatBoard.push({
            "name": getString(),
            "color": color,
            "message": getString(),
            "time": Date.now()
        });
        drawChatBoard();
    }
    function drawChatBoard() {
        chatCanvas = document.createElement("canvas");
        var ctx = chatCanvas.getContext("2d");
        var scaleFactor = Math.min(Math.max(canvasWidth / 1200, 0.75), 1); //scale factor = 0.75 to 1
        chatCanvas.width = 900 * scaleFactor;
        chatCanvas.height = 145 * scaleFactor;
        ctx.scale(scaleFactor, scaleFactor);
        ctx.globalAlpha = 0.8;
        var len = chatBoard.length;
        var from = len - 15;
        if (from < 0) from = 0;
        for (var i = 0; i < (len - from); i++) {
            var chatName = new UText(18, chatBoard[i + from].color);
            chatName.setValue(chatBoard[i + from].name);
            var width = chatName.getWidth();
            var a = chatName.render();
            ctx.drawImage(a, 15, chatCanvas.height / scaleFactor - 24 * (len - i - from));
            var chatText = new UText(18, '#666666');
            chatText.setValue(':' + chatBoard[i + from].message);
            a = chatText.render();
            ctx.drawImage(a, 15 + width * 1.8, chatCanvas.height / scaleFactor - 24 * (len - from - i));
        }
    }
    function updateNodes(view, offset) {
        timestamp = +new Date;
        var code = Math.random();
        ua = 0;
        var queueLength = view.getUint16(offset, 1);
        offset += 2;
        for (i = 0; i < queueLength; ++i) {
            var killer = nodes[view.getUint32(offset, 1)],
                killedNode = nodes[view.getUint32(offset + 4, 1)];
            offset += 8;
            if (killer && killedNode) {
                killedNode.destroy();
                killedNode.ox = killedNode.x;
                killedNode.oy = killedNode.y;
                killedNode.oSize = killedNode.size;
                killedNode.nx = killer.x;
                killedNode.ny = killer.y;
                killedNode.nSize = killedNode.size;
                killedNode.updateTime = timestamp;
            }
        }
        for (var i = 0;;) {
            var nodeid = view.getUint32(offset, 1);
            offset += 4;
            if (0 == nodeid) break;
            ++i;
            var size, posY, posX = view.getInt32(offset, 1);
            offset += 4;
            posY = view.getInt32(offset, 1);
            offset += 4;
            size = view.getInt16(offset, 1);
            offset += 2;
            for (var r = view.getUint8(offset++), g = view.getUint8(offset++), b = view.getUint8(offset++),
                color = (r << 16 | g << 8 | b).toString(16); 6 > color.length;) color = "0" + color;
            var colorstr = "#" + color,
                flags = view.getUint8(offset++),
                flagVirus = !!(flags & 1),
                flagAgitated = !!(flags & 16),
                _skin = "";
            flags & 2 && (offset += 4);
            if (flags & 4) {
                for (;;) { // skin name
                    var t = view.getUint8(offset, 1) & 0x7F;
                    offset += 1;
                    if (0 == t) break;
                    _skin += String.fromCharCode(t);
                }
            }
            for (var char, name = "";;) { // nick name
                char = view.getUint16(offset, 1);
                offset += 2;
                if (0 == char) break;
                name += String.fromCharCode(char);
            }
            var node = null;
            if (nodes.hasOwnProperty(nodeid)) {
                node = nodes[nodeid];
                node.updatePos();
                node.ox = node.x;
                node.oy = node.y;
                node.oSize = node.size;
                node.color = colorstr;
            } else {
                node = new Cell(nodeid, posX, posY, size, colorstr, name, _skin);
                nodelist.push(node);
                nodes[nodeid] = node;
                node.ka = posX;
                node.la = posY;
            }
            node.isVirus = flagVirus;
            node.isAgitated = flagAgitated;
            node.nx = posX;
            node.ny = posY;
            node.nSize = size;
            node.updateCode = code;
            node.updateTime = timestamp;
            node.flag = flags;
            name && node.setName(name);
            if (-1 != nodesOnScreen.indexOf(nodeid) && -1 == playerCells.indexOf(node)) {
                document.getElementById("overlays").style.display = "none";
                playerCells.push(node);
                if (1 == playerCells.length) {
                    nodeX = node.x;
                    nodeY = node.y;
                }
            }
        }
        queueLength = view.getUint32(offset, 1);
        offset += 4;
        for (i = 0; i < queueLength; i++) {
            var nodeId = view.getUint32(offset, 1);
            offset += 4;
            node = nodes[nodeId];
            null != node && node.destroy();
        }
        ua && 0 == playerCells.length && showOverlays(0);
    }
    function sendMouseMove() {
        var msg;
        if (wsIsOpen()) {
            msg = rawMouseX - canvasWidth / 2;
            var b = rawMouseY - canvasHeight / 2;
            if (64 <= msg * msg + b * b && !(.01 > Math.abs(oldX - X) && .01 > Math.abs(oldY - Y))) {
                oldX = X;
                oldY = Y;
                msg = prepareData(21);
                msg.setUint8(0, 16);
                msg.setFloat64(1, X, 1);
                msg.setFloat64(9, Y, 1);
                msg.setUint32(17, 0, 1);
                wsSend(msg);
            }
        }
    }
    function sendNickName() {
        if (wsIsOpen() && null != userNickName) {
            var msg = prepareData(1 + 2 * userNickName.length);
            msg.setUint8(0, 0);
            for (var i = 0; i < userNickName.length; ++i) msg.setUint16(1 + 2 * i, userNickName.charCodeAt(i), 1);
            wsSend(msg);
        }
    }
    function sendChat(str) {
        if (wsIsOpen() && (str.length < 200) && (str.length > 0) && !hideChat) {
            var msg = prepareData(2 + 2 * str.length);
            var offset = 0;
            msg.setUint8(offset++, 99);
            msg.setUint8(offset++, 0); // flags (0 for now)
            for (var i = 0; i < str.length; ++i) {
                msg.setUint16(offset, str.charCodeAt(i), 1);
                offset += 2;
            }
            wsSend(msg);
        }
    }
    function wsIsOpen() {
        return null != ws && ws.readyState == ws.OPEN;
    }
    function sendUint8(a) {
        if (wsIsOpen()) {
            var msg = prepareData(1);
            msg.setUint8(0, a);
            wsSend(msg);
        }
    }
    function redrawGameScene() {
        drawScene();
        wHandle.reqAnimFrame(redrawGameScene);
    }
    function canvasResize() {
        window.scrollTo(0, 0);
        canvasWidth = wHandle.innerWidth;
        canvasHeight = wHandle.innerHeight;
        nCanvas.width = canvasWidth;
        nCanvas.height = canvasHeight;
        drawScene();
    }
    function viewRange() {
        var ratio = Math.max(canvasHeight / 1080, canvasWidth / 1920);
        return ratio * zoom;
    }
    function calcViewZoom() {
        if (0 != playerCells.length) {
            for (var newViewZoom = 0, i = 0; i < playerCells.length; i++) newViewZoom += playerCells[i].size;
            newViewZoom = Math.pow(Math.min(64 / newViewZoom, 1), .4) * viewRange();
            viewZoom = (9 * viewZoom + newViewZoom) / 10;
        }
    }
    function drawScene() {
        var a, oldtime = Date.now();
        ++cb;
        timestamp = oldtime;
        if (0 < playerCells.length) {
            calcViewZoom();
            var c = a = 0;
            for (var d = 0; d < playerCells.length; d++) {
                playerCells[d].updatePos();
                a += playerCells[d].x / playerCells.length;
                c += playerCells[d].y / playerCells.length;
            }
            posX = a;
            posY = c;
            posSize = viewZoom;
            nodeX = (nodeX + a) / 2;
            nodeY = (nodeY + c) / 2;
        } else {
            nodeX = (29 * nodeX + posX) / 30;
            nodeY = (29 * nodeY + posY) / 30;
            viewZoom = (9 * viewZoom + posSize * viewRange()) / 10;
        }
        buildQTree();
        mouseCoordChange();
        acidMode || ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        if (acidMode) {
            if (showDarkTheme) {
                ctx.fillStyle = '#111111';
                ctx.globalAlpha = 0.07;
                ctx.fillRect(0, 0, canvasWidth, canvasHeight);
                ctx.globalAlpha = 1;
            } else {
                ctx.fillStyle = '#F2FBFF';
                ctx.globalAlpha = 0.07;
                ctx.fillRect(0, 0, canvasWidth, canvasHeight);
                ctx.globalAlpha = 1;
            }
        } else {
            drawGrid();
        }
        nodelist.sort(function(a, b) {
            return a.size == b.size ? a.id - b.id : a.size - b.size;
        });
        ctx.save();
        ctx.translate(canvasWidth / 2, canvasHeight / 2);
        ctx.scale(viewZoom, viewZoom);
        ctx.translate(-nodeX, -nodeY);
        drawBorders(ctx);
        drawSectors(ctx);
        for (d = 0; d < Cells.length; d++) Cells[d].drawOneCell(ctx);
        for (d = 0; d < nodelist.length; d++) nodelist[d].drawOneCell(ctx);
        if (drawLine) {
            drawLineX = (3 * drawLineX + lineX) / 4;
            drawLineY = (3 * drawLineY + lineY) / 4;
            ctx.save();
            ctx.strokeStyle = "#FAA";
            ctx.lineWidth = 10;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.globalAlpha = .5;
            ctx.beginPath();
            for (d = 0; d < playerCells.length; d++) {
                ctx.moveTo(playerCells[d].x, playerCells[d].y);
                ctx.lineTo(drawLineX, drawLineY);
            }
            ctx.stroke();
            ctx.restore();
        }
        ctx.restore();
        lbCanvas && lbCanvas.width && ctx.drawImage(lbCanvas, canvasWidth - lbCanvas.width - 10, 10); // Draw Leader Board
        if (chatCanvas != null && !hideChat) ctx.drawImage(chatCanvas, 0, canvasHeight - chatCanvas.height - 50); // Draw Chat Board
        userScore = Math.max(userScore, calcScore());
        if (0 != userScore) {
            if (null == scoreText) {
                scoreText = new UText(24, '#FFF');
            }
            if (showPosition) position = "  |  Position: " + nodeX.toFixed(0) + ", " + nodeY.toFixed(0);
            else var position = "";
            scoreText.setValue('Score: ' + ~~(userScore / 100) + position);
            c = scoreText.render();
            a = c.width;
            ctx.globalAlpha = .2;
            ctx.fillStyle = '#000';
            ctx.fillRect(10, 10, a + 10, 34); //canvasHeight - 10 - 24 - 10
            ctx.globalAlpha = 1;
            ctx.drawImage(c, 15, 15); //canvasHeight - 10 - 24 - 5
        }
        //drawSplitIcon(ctx);
        drawTouch(ctx);
        var deltatime = Date.now() - oldtime;
        deltatime > 1E3 / 60 ? z -= .01 : deltatime < 1E3 / 65 && (z += .01);
        .4 > z && (z = .4);
        1 < z && (z = 1);
    }
    function drawTouch(ctx) {
        ctx.save();
        if (touchable) {
            for (var i = 0; i < touches.length; i++) {
                var touch = touches[i];
                if (touch.identifier == leftTouchID) {
                    ctx.beginPath();
                    ctx.strokeStyle = "#0096FF";
                    ctx.lineWidth = 6;
                    ctx.arc(leftTouchStartPos.x, leftTouchStartPos.y, 40, 0, Math.PI * 2, 1);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.strokeStyle = "#0096FF";
                    ctx.lineWidth = 2;
                    ctx.arc(leftTouchStartPos.x, leftTouchStartPos.y, 60, 0, Math.PI * 2, 1);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.strokeStyle = "#0096FF";
                    ctx.arc(leftTouchPos.x, leftTouchPos.y, 40, 0, Math.PI * 2, 1);
                    ctx.stroke();
                } else {
                    ctx.beginPath();
                    ctx.beginPath();
                    ctx.strokeStyle = "#0096FF";
                    ctx.lineWidth = "6";
                    ctx.arc(touch.clientX, touch.clientY, 40, 0, Math.PI * 2, 1);
                    ctx.stroke();
                }
            }
        }
        ctx.restore();
    }
    function drawGrid() {
        ctx.fillStyle = showDarkTheme ? "#111111" : "#F2FBFF";
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        ctx.save();
        ctx.strokeStyle = showDarkTheme ? "#AAA" : "#000";
        ctx.globalAlpha = .05;
        ctx.scale(viewZoom, viewZoom);
        var a = canvasWidth / viewZoom,
            b = canvasHeight / viewZoom;
        if (showGrid) {
            for (var c = -.5 + (-nodeX + a / 2) % 50; c < a; c += 50) {
                ctx.beginPath();
                ctx.moveTo(c, 0);
                ctx.lineTo(c, b);
                ctx.stroke();
            }
            for (c = -.5 + (-nodeY + b / 2) % 50; c < b; c += 50) {
                ctx.beginPath();
                ctx.moveTo(0, c);
                ctx.lineTo(a, c);
                ctx.stroke();
            }
        }
        ctx.restore();
    }
    /*function drawSplitIcon(ctx) {
        if (isTouchStart && splitIcon.width) {
            var size = ~~(canvasWidth / 7);
            ctx.drawImage(splitIcon, canvasWidth - size, canvasHeight - size, size, size);
        }
        if (isTouchStart && splitIcon.width) {
            size = ~~(canvasWidth / 7);
            ctx.drawImage(ejectIcon, canvasWidth - size, canvasHeight - 2 * size - 10, size, size);
        }
    }*/
    function calcScore() {
        for (var score = 0, i = 0; i < playerCells.length; i++) score += playerCells[i].nSize * playerCells[i].nSize;
        return score;
    }
    function drawLB() {
        lbCanvas = null;
        if (null != teamScores || 0 != leaderBoard.length) {
            if (null != teamScores || showName) {
                lbCanvas = document.createElement("canvas");
                var ctx = lbCanvas.getContext("2d"),
                    boardLength = 60;
                boardLength = null == teamScores ? boardLength + 24 * leaderBoard.length : boardLength + 180;
                var scaleFactor = Math.min(0.22 * canvasHeight, Math.min(200, .3 * canvasWidth)) / 200;
                lbCanvas.width = 200 * scaleFactor;
                lbCanvas.height = boardLength * scaleFactor;
                ctx.scale(scaleFactor, scaleFactor);
                ctx.globalAlpha = .4;
                ctx.fillStyle = "#000";
                ctx.fillRect(0, 0, 200, boardLength);
                ctx.globalAlpha = 1;
                ctx.fillStyle = "#FFF";
                var c = "Leaderboard";
                ctx.font = "30px Ubuntu";
                ctx.fillText(c, 100 - ctx.measureText(c).width / 2, 40);
                var b;
                if (null == teamScores) {
                    for (ctx.font = "20px Ubuntu", b = 0; b < leaderBoard.length; ++b) {
                        c = leaderBoard[b].name || "An unnamed cell";
                        if (!showName) {
                            (c = "An unnamed cell");
                        }
                        if (-1 != nodesOnScreen.indexOf(leaderBoard[b].id)) {
                            playerCells[0].name && (c = playerCells[0].name);
                            var userLBColor = String($("#lbColor").val());
                            ctx.fillStyle = "#" + userLBColor;
                            if (!noRanking) {
                                c = b + 1 + ". " + c;
                            }
                            ctx.fillText(c, 100 - ctx.measureText(c).width / 2, 70 + 24 * b);
                        } else {
                            //var enemyLBColor = String($("#lbColor2").val());
                            ctx.fillStyle = "#FFF";
                            if (!noRanking) {
                                c = b + 1 + ". " + c;
                            }
                            ctx.fillText(c, 100 - ctx.measureText(c).width / 2, 70 + 24 * b);
                        }
                    }
                } else {
                    for (b = c = 0; b < teamScores.length; ++b) {
                        var d = c + teamScores[b] * Math.PI * 2;
                        ctx.fillStyle = teamColor[b + 1];
                        ctx.beginPath();
                        ctx.moveTo(100, 140);
                        ctx.arc(100, 140, 80, c, d, 0);
                        ctx.fill();
                        c = d;
                    }
                }
            }
        }
    }
    
    function drawBorders() {
        if (!showBorders) return;
        ctx.save();
        var color = String($("#borderColor").val());
        ctx.strokeStyle = "#" + color;
        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.moveTo(minX - 30, minY - 30);
        ctx.lineTo(maxX - 30, minY - 30);
        ctx.lineTo(maxX - 30, maxY + 30);
        ctx.lineTo(minX - 30, maxY + 30);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    }
    function drawSectors() {
        if (!showSectors) return;
        ctx.strokeRect(minX, maxY, 500, 500);
        var x = Math.round(minX) + 40;
        var y = Math.round(minY) + 40;
        var letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        var w = (Math.round(maxX) - 90 - x) / 5;
        var h = (Math.round(maxY) - 40 - y) / 5;
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 0.05;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = w * 0.6 + "px Russo One";
        var color = String($("#sectorColor").val());
        ctx.fillStyle = "#" + color;
        var j = 0;
        for (; 5 > j; j++) {
            var i = 0;
            for (; 5 > i; i++) {
                ctx.fillText(letter[j] + (i + 1), x + w * i + w / 2, y + h * j + h / 2);
            }
        }
        ctx.lineWidth = 100;
        ctx.strokeStyle = "#" + color;
        j = 0;
        for (; 5 > j; j++) {
            i = 0;
            for (; 5 > i; i++) {
                ctx.strokeRect(x + w * i, y + h * j, w, h);
            }
        }
        ctx.stroke();
        ctx.restore();
    }
    function Cell(uid, ux, uy, usize, ucolor, uname, a) {
        this.id = uid;
        this.ox = this.x = ux;
        this.oy = this.y = uy;
        this.oSize = this.size = usize;
        this.color = ucolor;
        this.points = [];
        this.pointsAcc = [];
        this.createPoints();
        this.setName(uname);
        this._skin = a;
    }
    function UText(usize, ucolor, ustroke, ustrokecolor) {
        usize && (this._size = usize);
        ucolor && (this._color = ucolor);
        this._stroke = !!ustroke;
        ustrokecolor && (this._strokeColor = ustrokecolor);
    }
    var nCanvas,
        ctx,
        mainCanvas,
        lbCanvas,
        chatCanvas,
        canvasWidth,
        canvasHeight,
        qTree = null,
        ws = null,
        nodeX = 0,
        nodeY = 0,
        nodesOnScreen = [],
        playerCells = [],
        nodes = {},
        nodelist = [],
        Cells = [],
        leaderBoard = [],
        chatBoard = [],
        rawMouseX = 0,
        rawMouseY = 0,
        X = -1,
        Y = -1,
        cb = 0,
        timestamp = 0,
        userNickName = null,
        leftPos = 0,
        topPos = 0,
        rightPos = 1E4,
        bottomPos = 1E4,
        viewZoom = 1,
        ua = 0,
        userScore = 0,
        /* v settings v */
        showSkin = 1,
        showName = 1,
        showColor = 0,
        showCellBorder = 0,
        showPosition = 0,
        showDarkTheme = 0,
        showSectors = 0,
        nameShadows = 0,
        showMass = 0,
        showGrid = 1,
        hideChat = 0,
        showBorders = 0,
        /* ^ settings ^ */
        smoothRender = 2,
        posX = nodeX = ~~((leftPos + rightPos) / 2),
        posY = nodeY = ~~((topPos + bottomPos) / 2),
        posSize = 1,
        gameMode = "",
        teamScores = null,
        connecting = 0,
        hasOverlay = 1,
        drawLine = 0,
        lineX = 0,
        lineY = 0,
        drawLineX = 0,
        drawLineY = 0,
        Ra = 0,
        teamColor = ["#333333", "#FF3333", "#33FF33", "#3333FF"],
        acidMode = 0,
        zoom = 1,
        isTouchStart = "ontouchstart" in wHandle && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        splitIcon = new Image,
        ejectIcon = new Image,
        minX = 0,
        minY = 0,
        maxX = 0,
        maxY = 0,
        noRanking = 0;
    splitIcon.src = "assets/img/split.png";
    ejectIcon.src = "assets/img/feed.png";
    wHandle.isSpectating = 0;
    wHandle.setNick = function(arg) {
        hideOverlays();
        userNickName = arg;
        sendNickName();
        userScore = 0;
    };
    wHandle.setSkins = function(arg) {
        showSkin = arg;
    };
    wHandle.setNames = function(arg) {
        showName = arg;
    };
    wHandle.setCellBorder = function(arg) {
        showCellBorder = arg;
    };
    wHandle.setCellPos = function (arg) {
        showPosition = arg;
    };
    wHandle.setDarkTheme = function(arg) {
        showDarkTheme = arg;
    };
    wHandle.setColors = function(arg) {
        showColor = arg;
    };
    wHandle.setShowMass = function(arg) {
        showMass = arg;
    };
    wHandle.setSmooth = function(arg) {
        smoothRender = arg ? 2 : 0;
    };
    wHandle.setMapBorders = function(arg) {
        showBorders = arg;
    };
    wHandle.setMapSectors = function(arg) {
        showSectors = arg;
    };
    wHandle.setNameShadows = function(arg) {
        nameShadows = arg;
    };
    wHandle.setChatHide = function(arg) {
        hideChat = arg;
        hideChat ? wjQuery('#chat_textbox').hide() : wjQuery('#chat_textbox').show();
    };
    wHandle.setMapGrid = function(arg) {
        showGrid = arg;
    };
    wHandle.spectate = function() {
        userNickName = null;
        wHandle.isSpectating = 1;
        sendUint8(1);
        hideOverlays();
    };
    wHandle.setGameMode = function(arg) {
        if (arg != gameMode) {
            gameMode = arg;
            showConnecting();
        }
    };
    wHandle.setAcid = function(arg) {
        acidMode = arg;
    };
    if (null != wHandle.localStorage) {
        if (null == wHandle.localStorage.AB8) {
            wHandle.localStorage.AB8 = ~~(100 * Math.random());
        }
        Ra = +wHandle.localStorage.AB8;
        wHandle.ABGroup = Ra;
    }
    setTimeout(function() {}, 3E5);
    var T = {
        ZW: "EU-London"
    };
    wHandle.connect = wsConnect;
    var data = {
        "action": "test"
    };
    var response = null;
    wjQuery.ajax({
        type: "POST",
        dataType: "json",
        url: "checkdir.php",
        data: data,
        success: function(data) {
            response = JSON.parse(data["names"]);
        }
    });
    var interval1Id = setInterval(function() {
        wjQuery.ajax({
            type: "POST",
            dataType: "json",
            url: "checkdir.php",
            data: data,
            success: function(data) {
                response = JSON.parse(data["names"]);
            }
        });
        for (var i = 0; i < response; i++) {
            if (-1 == knownNameDict.indexOf(response[i])) {
                knownNameDict.push(response[i]);
            }
        }
    }, 15000);
    var delay = 500,
        oldX = -1,
        oldY = -1,
        z = 1,
        scoreText = null,
        skins = {},
        knownNameDict = "kraken;latvia;fidget red;fidget blue;fidget black;fidget green;fidget yellow;fidget grey;fidget orange;fidget white;fidget spinner;illuminati;dodge charger;cr king;dark theme;mercury;cell;virus;basketball;rockstar n;penta;rockstar s;penta;creeper;dragon;chrome;hellcat;poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;ussr;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;imperial japan;apple;4chan;italy;cat;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;illuminati;facebook;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;venezuela;blatter;chavez;cuba;fidel;merkel;palin;queen;boris;bush;trump;underwood".split(";"),
        knownNameDict_noDisp = "kraken;fidget red;fidget blue;fidget black;fidget green;fidget yellow;fidget grey;fidget orange;fidget white;fidget spinner;cell;virus;8;EA;hellcat;cr king;nasa;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;blatter;chavez;fidel;merkel;palin;queen;boris;bush;trump;underwood;dodge charger;dark theme",
        ib = ["_canvas'blob"];
    Cell.prototype = {
        id: 0,
        points: null,
        pointsAcc: null,
        name: null,
        nameCache: null,
        sizeCache: null,
        x: 0,
        y: 0,
        size: 0,
        ox: 0,
        oy: 0,
        oSize: 0,
        nx: 0,
        ny: 0,
        nSize: 0,
        flag: 0,
        updateTime: 0,
        updateCode: 0,
        drawTime: 0,
        destroyed: 0,
        isVirus: 0,
        isAgitated: 0,
        wasSimpleDrawing: 1,
        destroy: function() {
            var tmp;
            for (tmp = 0; tmp < nodelist.length; tmp++)
                if (nodelist[tmp] == this) {
                    nodelist.splice(tmp, 1);
                    break;
                }
            delete nodes[this.id];
            tmp = playerCells.indexOf(this);
            if (-1 != tmp) {
                ua = 1;
                playerCells.splice(tmp, 1);
            }
            tmp = nodesOnScreen.indexOf(this.id);
            if (-1 != tmp) {
                nodesOnScreen.splice(tmp, 1);
            }
            this.destroyed = 1;
            Cells.push(this);
        },
        getNameSize: function() {
            if (nameShadows) size = .45;
            else var size = .3;
            return Math.max(~~(size * this.size), 24);
        },
        setName: function(a) {
            this.name = a;
            if (null == this.nameCache) { // Name text color
                var nameColor = String($("#nameColor").val());
                this.nameCache = new UText(this.getNameSize(), "#" + nameColor, 1, "#000");
                this.nameCache.setValue(this.name);
            } else {
                this.nameCache.setSize(this.getNameSize());
                this.nameCache.setValue(this.name);
            }
        },
        createPoints: function() {
            for (var samplenum = this.getNumPoints(); this.points.length > samplenum;) {
                var rand = ~~(Math.random() * this.points.length);
                this.points.splice(rand, 1);
                this.pointsAcc.splice(rand, 1);
            }
            if (0 == this.points.length && 0 < samplenum) {
                this.points.push({
                    ref: this,
                    size: this.size,
                    x: this.x,
                    y: this.y
                });
                this.pointsAcc.push(Math.random() - .5);
            }
            while (this.points.length < samplenum) {
                var rand2 = ~~(Math.random() * this.points.length),
                    point = this.points[rand2];
                this.points.splice(rand2, 0, {
                    ref: this,
                    size: point.size,
                    x: point.x,
                    y: point.y
                });
                this.pointsAcc.splice(rand2, 0, this.pointsAcc[rand2]);
            }
        },
        getNumPoints: function() {
            if (0 == this.id) return 16;
            var a = 10;
            if (20 > this.size) a = 0;
            if (this.isVirus) a = 30;
            var b = this.size;
            if (!this.isVirus)(b *= viewZoom);
            b *= z;
            if (this.flag & 32)(b *= .25);
            return ~~Math.max(b, a);
        },
        movePoints: function() {
            this.createPoints();
            for (var points = this.points, pointsacc = this.pointsAcc, numpoints = points.length, i = 0; i < numpoints; ++i) {
                var pos1 = pointsacc[(i - 1 + numpoints) % numpoints],
                    pos2 = pointsacc[(i + 1) % numpoints];
                pointsacc[i] += (Math.random() - .5) * (this.isAgitated ? 3 : 1);
                pointsacc[i] *= .7;
                10 < pointsacc[i] && (pointsacc[i] = 10); - 10 > pointsacc[i] && (pointsacc[i] = -10);
                pointsacc[i] = (pos1 + pos2 + 8 * pointsacc[i]) / 10;
            }
            for (var ref = this, isvirus = this.isVirus ? 0 : (this.id / 1E3 + timestamp / 1E4) % (2 * Math.PI), j = 0; j < numpoints; ++j) {
                var f = points[j].size,
                    e = points[(j - 1 + numpoints) % numpoints].size,
                    m = points[(j + 1) % numpoints].size;
                if (15 < this.size && null != qTree && 20 < this.size * viewZoom && 0 != this.id) {
                    var l = 0,
                        n = points[j].x,
                        q = points[j].y;
                    qTree.retrieve2(n - 5, q - 5, 10, 10, function(a) {
                        if (a.ref != ref && 25 > (n - a.x) * (n - a.x) + (q - a.y) * (q - a.y)) {
                            l = 1;
                        }
                    });
                    if (!l && points[j].x < leftPos || points[j].y < topPos || points[j].x > rightPos || points[j].y > bottomPos) {
                        l = 1;
                    }
                    if (l) {
                        if (0 < pointsacc[j]) {
                            (pointsacc[j] = 0);
                        }
                        pointsacc[j] -= 1;
                    }
                }
                f += pointsacc[j];
                0 > f && (f = 0);
                f = this.isAgitated ? (19 * f + this.size) / 20 : (12 * f + this.size) / 13;
                points[j].size = (e + m + 8 * f) / 10;
                e = 2 * Math.PI / numpoints;
                m = this.points[j].size;
                this.isVirus && 0 == j % 2 && (m += 5);
                points[j].x = this.x + Math.cos(e * j + isvirus) * m;
                points[j].y = this.y + Math.sin(e * j + isvirus) * m;
            }
        },
        updatePos: function() {
            if (0 == this.id) return 1;
            var a;
            a = (timestamp - this.updateTime) / 120;
            a = 0 > a ? 0 : 1 < a ? 1 : a;
            var b = 0 > a ? 0 : 1 < a ? 1 : a;
            this.getNameSize();
            if (this.destroyed && 1 <= b) {
                var c = Cells.indexOf(this); - 1 != c && Cells.splice(c, 1);
            }
            this.x = a * (this.nx - this.ox) + this.ox;
            this.y = a * (this.ny - this.oy) + this.oy;
            this.size = b * (this.nSize - this.oSize) + this.oSize;
            return b;
        },
        shouldRender: function() {
            if (0 == this.id) {
                return 1;
            } else {
                return !(this.x + this.size + 40 < nodeX - canvasWidth / 2 / viewZoom ||
                this.y + this.size + 40 < nodeY - canvasHeight / 2 / viewZoom ||
                this.x - this.size - 40 > nodeX + canvasWidth / 2 / viewZoom ||
                this.y - this.size - 40 > nodeY + canvasHeight / 2 / viewZoom);
            }
        },
        drawOneCell: function(ctx) {
            if (this.shouldRender()) {
                var b = (0 != this.id && !this.isVirus && smoothRender > viewZoom);
                if (10 > this.getNumPoints()) b = 1;
                if (this.wasSimpleDrawing && !b)
                    for (var c = 0; c < this.points.length; c++) this.points[c].size = this.size;
                this.wasSimpleDrawing = b;
                ctx.save();
                this.drawTime = timestamp;
                c = this.updatePos();
                this.destroyed && (ctx.globalAlpha *= 1 - c);
                ctx.lineWidth = 10;
                ctx.lineCap = "round";
                ctx.lineJoin = this.isVirus ? "miter" : "round";
                if (showColor) {
                    ctx.fillStyle = "#FFF";
                    ctx.strokeStyle = "#AAA";
                } else {
                    ctx.fillStyle = this.color;
                    ctx.strokeStyle = this.color;
                }
                if (b) {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size - (20 < this.size ? 0 : 5), 0, 2 * Math.PI, 0);
                } else {
                    this.movePoints();
                    ctx.beginPath();
                    var d = this.getNumPoints();
                    ctx.moveTo(this.points[0].x, this.points[0].y);
                    for (c = 1; c <= d; ++c) {
                        var e = c % d;
                        ctx.lineTo(this.points[e].x, this.points[e].y);
                    }
                }
                ctx.closePath();
                var skinName = this.name.toLowerCase();
                if (skinName.indexOf('[') != -1) {
                    var clanStart = skinName.indexOf('[');
                    var clanEnd = skinName.indexOf(']');
                    skinName = skinName.slice(clanStart + 1, clanEnd);
                }
                // Need skins to disable in teams mode
                if (!this.isAgitated && showSkin && ':teams' != gameMode) {
                    if (-1 != knownNameDict.indexOf(skinName)) {
                        if (!skins.hasOwnProperty(skinName)) {
                            skins = new Image;
                            //var customSkinURL = String($("#skinURL").val());
                            //if (!customSkinURL) {
                                skins.src = SKIN_URL + skinName + '.png'/*('.png'|'.jpg')*/;
                            //} else if (customSkinURL) {
                                //skins.src = customSkinURL;
                            //}
                            //this.name.replace(/\[|\]/g, '')
                        }
                        if (0 != skins.width && skins.complete) {
                            c = skins;
                        } else {
                            c = null;
                        }
                    } else {
                        c = null;
                    }
                } else {
                    c = null;
                }
                c = (e = c) ? -1 != ib.indexOf(skinName) : 0;
                if (showCellBorder) {
                    if (!b || 20 < this.size)
                    ctx.lineWidth = 5;
                    ctx.stroke();
                } else {
                    b || ctx.stroke();
                }
                ctx.fill();
                if (!(null == e || c)) {
                    ctx.save();
                    ctx.clip();
                    ctx.drawImage(e, this.x - this.size, this.y - this.size, 2 * this.size, 2 * this.size);
                    ctx.restore();
                }
                if (showCellBorder) {
                    if (!b || 20 < this.size) {
                        var color = String($("#cellBorderColor").val());
                        ctx.strokeStyle = '#' + color;
                        if (color == '000000' || color == '000') alpha = .12;
                        else var alpha = 1;
                        ctx.globalAlpha *= alpha;
                        var size = String($("#cellBorderSize").val());
                        ctx.lineWidth = size;
                        ctx.stroke();
                    }
                } else {
                    if ((showColor || 15 < this.size) && !b) {
                        ctx.strokeStyle = '#000';
                        ctx.globalAlpha *= .12;
                        ctx.stroke();
                    }
                }
                ctx.globalAlpha = 1;
                if (null != e && c) {
                    ctx.drawImage(e, this.x - 2 * this.size, this.y - 2 * this.size, 4 * this.size, 4 * this.size);
                }
                c = -1 != playerCells.indexOf(this);
                var ncache;
                //draw name
                if (0 != this.id) {
                    var b = ~~this.y;
                    if ((showName || c) && this.name && this.nameCache && (null == e || -1 == knownNameDict_noDisp.indexOf(skinName))) {
                        ncache = this.nameCache;
                        ncache.setValue(this.name);
                        ncache.setSize(this.getNameSize());
                        var ratio = Math.ceil(10 * viewZoom) / 10;
                        ncache.setScale(ratio);
                        var rnchache = ncache.render(),
                            w = ~~(rnchache.width / ratio),
                            h = ~~(rnchache.height / ratio);
                        ctx.drawImage(rnchache, ~~this.x - ~~(w / 2), b - ~~(h / 2), w, h);
                        b += rnchache.height / 2 / ratio + 4;
                    }
                    if (showMass && (c || 0 == playerCells.length && (!this.isVirus || this.isAgitated) && 20 < this.size)) {
                        if (null == this.sizeCache) { // Mass text colors
                            this.sizeCache = new UText(this.getNameSize() / 2, "#FFF", 1, "#000");
                        }
                        c = this.sizeCache;
                        c.setSize(this.getNameSize() / 2);
                        c.setValue(~~(this.size * this.size / 100));
                        ratio = Math.ceil(10 * viewZoom) / 10;
                        c.setScale(ratio);
                        e = c.render();
                        w = ~~(e.width / ratio);
                        h = ~~(e.height / ratio);
                        if (nameShadows) div = 4.5;
                        else var div = 2;
                        ctx.drawImage(e, ~~this.x - ~~(w / 2), b - ~~(h / div), w, h);
                    }
                }
                ctx.restore();
            }
        }
    };
    UText.prototype = {
        _value: "",
        _color: "#000",
        _stroke: 0,
        _strokeColor: "#000",
        _size: 16,
        _canvas: null,
        _ctx: null,
        _dirty: 0,
        _scale: 1,
        setSize: function(a) {
            if (this._size != a) {
                this._size = a;
                this._dirty = 1;
            }
        },
        setScale: function(a) {
            if (this._scale != a) {
                this._scale = a;
                this._dirty = 1;
            }
        },
        setStrokeColor: function(a) {
            if (this._strokeColor != a) {
                this._strokeColor = a;
                this._dirty = 1;
            }
        },
        setValue: function(a) {
            if (a != this._value) {
                this._value = a;
                this._dirty = 1;
            }
        },
        render: function() {
            if (null == this._canvas) {
                this._canvas = document.createElement("canvas");
                this._ctx = this._canvas.getContext("2d");
            }
            if (this._dirty) {
                this._dirty = 0;
                var canvas = this._canvas,
                    ctx = this._ctx,
                    value = this._value,
                    scale = this._scale,
                    fontsize = this._size,
                    font = fontsize + 'px Ubuntu';
                ctx.font = font;
                var h = ~~(.2 * fontsize);
                canvas.width = (ctx.measureText(value).width + 6) * scale;
                canvas.height = (fontsize + h) * scale;
                ctx.font = font;
                ctx.scale(scale, scale);
                ctx.globalAlpha = 1;
                if (nameShadows) width = 8 / (viewZoom * 2.3);
                else var width = 3;
                ctx.lineWidth = width;
                ctx.strokeStyle = this._strokeColor;
                ctx.fillStyle = this._color;
                this._stroke && ctx.strokeText(value, 3, fontsize - h / 2);
                ctx.fillText(value, 3, fontsize - h / 2);
            }
            return this._canvas;
        },
        getWidth: function() {
            return (ctx.measureText(this._value).width + 6);
        }
    };
    Date.now || (Date.now = function() {
        return (new Date).getTime();
    });
    var Quad = {
        init: function(args) {
            function Node(x, y, w, h, depth) {
                this.x = x;
                this.y = y;
                this.w = w;
                this.h = h;
                this.depth = depth;
                this.items = [];
                this.nodes = [];
            }
            var c = args.maxChildren || 2;
            var d = args.maxDepth || 4;
            Node.prototype = {
                x: 0,
                y: 0,
                w: 0,
                h: 0,
                depth: 0,
                items: null,
                nodes: null,
                exists: function(selector) {
                    for (var i = 0; i < this.items.length; ++i) {
                        var item = this.items[i];
                        if (item.x >= selector.x && item.y >= selector.y && item.x < selector.x + selector.w && item.y < selector.y + selector.h) return 1;
                    }
                    if (0 != this.nodes.length) {
                        var self = this;
                        return this.findOverlappingNodes(selector, function(dir) {
                            return self.nodes[dir].exists(selector);
                        });
                    }
                    return 0;
                },
                retrieve: function(item, callback) {
                    for (var i = 0; i < this.items.length; ++i) callback(this.items[i]);
                    if (0 != this.nodes.length) {
                        var self = this;
                        this.findOverlappingNodes(item, function(dir) {
                            self.nodes[dir].retrieve(item, callback);
                        });
                    }
                },
                insert: function(a) {
                    if (0 != this.nodes.length) {
                        this.nodes[this.findInsertNode(a)].insert(a);
                    } else {
                        if (this.items.length >= c && this.depth < d) {
                            this.devide();
                            this.nodes[this.findInsertNode(a)].insert(a);
                        } else {
                            this.items.push(a);
                        }
                    }
                },
                findInsertNode: function(a) {
                    return a.x < this.x + this.w / 2 ? a.y < this.y + this.h / 2 ? 0 : 2 : a.y < this.y + this.h / 2 ? 1 : 3;
                },
                findOverlappingNodes: function(a, b) {
                    return a.x < this.x + this.w / 2 &&
                    (a.y < this.y + this.h / 2 && b(0) ||
                    a.y >= this.y + this.h / 2 && b(2)) ||
                    a.x >= this.x + this.w / 2 &&
                    (a.y < this.y + this.h / 2 && b(1) ||
                    a.y >= this.y + this.h / 2 && b(3)) ? 1 : 0;
                },
                devide: function() {
                    var a = this.depth + 1,
                        c = this.w / 2,
                        d = this.h / 2;
                    this.nodes.push(new Node(this.x, this.y, c, d, a));
                    this.nodes.push(new Node(this.x + c, this.y, c, d, a));
                    this.nodes.push(new Node(this.x, this.y + d, c, d, a));
                    this.nodes.push(new Node(this.x + c, this.y + d, c, d, a));
                    a = this.items;
                    this.items = [];
                    for (c = 0; c < a.length; c++) this.insert(a[c]);
                },
                clear: function() {
                    for (var a = 0; a < this.nodes.length; a++) this.nodes[a].clear();
                    this.items.length = 0;
                    this.nodes.length = 0;
                }
            };
            var internalSelector = {
                x: 0,
                y: 0,
                w: 0,
                h: 0
            };
            return {
                root: new Node(args.minX, args.minY, args.maxX - args.minX, args.maxY - args.minY, 0),
                insert: function(a) {
                    this.root.insert(a);
                },
                retrieve: function(a, b) {
                    this.root.retrieve(a, b);
                },
                retrieve2: function(a, b, c, d, callback) {
                    internalSelector.x = a;
                    internalSelector.y = b;
                    internalSelector.w = c;
                    internalSelector.h = d;
                    this.root.retrieve(internalSelector, callback);
                },
                exists: function(a) {
                    return this.root.exists(a);
                },
                clear: function() {
                    this.root.clear();
                }
            };
        }
    };
/*    wjQuery(function() {
        function renderFavicon() {
            if (0 < playerCells.length) {
                redCell.color = playerCells[0].color;
                redCell.setName(playerCells[0].name);
            }
            ctx.clearRect(0, 0, 32, 32);
            ctx.save();
            ctx.translate(16, 16);
            ctx.scale(.4, .4);
            redCell.drawOneCell(ctx);
            ctx.restore();
            var favicon = document.getElementById("favicon"), oldfavicon = favicon.cloneNode(1);
            favicon.parentNode.replaceChild(oldfavicon, favicon)
        }
        var redCell = new Cell(0, 0, 0, 32, "#ED1C24", "");
        var favCanvas = document.createElement("canvas");
        favCanvas.width = 32;
        favCanvas.height = 32;
        var ctx = favCanvas.getContext("2d");
        renderFavicon();
        setInterval(renderFavicon, 1E3);
        setInterval(drawChatBoard, 1E3);
    });*/
    wHandle.onload = gameLoop;
})(window, window.jQuery);
