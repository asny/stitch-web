(function() {
    const __exports = {};
    let wasm;

    /**
    * @returns {void}
    */
    __exports.start = function() {
        return wasm.start();
    };

    let cachedTextDecoder = new TextDecoder('utf-8');

    let cachegetUint8Memory = null;
    function getUint8Memory() {
        if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
            cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
        }
        return cachegetUint8Memory;
    }

    function getStringFromWasm(ptr, len) {
        return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
    }

    __exports.__wbg_error_4bb6c2a97407129a = function(arg0, arg1) {
        let varg0 = getStringFromWasm(arg0, arg1);

        varg0 = varg0.slice();
        wasm.__wbindgen_free(arg0, arg1 * 1);

        console.error(varg0);
    };

    const heap = new Array(32);

    heap.fill(undefined);

    heap.push(undefined, null, true, false);

    let heap_next = heap.length;

    function addHeapObject(obj) {
        if (heap_next === heap.length) heap.push(heap.length + 1);
        const idx = heap_next;
        heap_next = heap[idx];

        heap[idx] = obj;
        return idx;
    }

    __exports.__wbg_new_59cb74e423758ede = function() {
        return addHeapObject(new Error());
    };

function getObject(idx) { return heap[idx]; }

let cachedTextEncoder = new TextEncoder('utf-8');

let WASM_VECTOR_LEN = 0;

let passStringToWasm;
if (typeof cachedTextEncoder.encodeInto === 'function') {
    passStringToWasm = function(arg) {

        let size = arg.length;
        let ptr = wasm.__wbindgen_malloc(size);
        let writeOffset = 0;
        while (true) {
            const view = getUint8Memory().subarray(ptr + writeOffset, ptr + size);
            const { read, written } = cachedTextEncoder.encodeInto(arg, view);
            arg = arg.substring(read);
            writeOffset += written;
            if (arg.length === 0) {
                break;
            }
            ptr = wasm.__wbindgen_realloc(ptr, size, size * 2);
            size *= 2;
        }
        WASM_VECTOR_LEN = writeOffset;
        return ptr;
    };
} else {
    passStringToWasm = function(arg) {

        const buf = cachedTextEncoder.encode(arg);
        const ptr = wasm.__wbindgen_malloc(buf.length);
        getUint8Memory().set(buf, ptr);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    };
}

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory;
}

__exports.__wbg_stack_558ba5917b466edd = function(ret, arg0) {

    const retptr = passStringToWasm(getObject(arg0).stack);
    const retlen = WASM_VECTOR_LEN;
    const mem = getUint32Memory();
    mem[ret / 4] = retptr;
    mem[ret / 4 + 1] = retlen;

};

function isLikeNone(x) {
    return x === undefined || x === null;
}

__exports.__widl_f_get_element_by_id_Document = function(arg0, arg1, arg2) {
    let varg1 = getStringFromWasm(arg1, arg2);

    const val = getObject(arg0).getElementById(varg1);
    return isLikeNone(val) ? 0 : addHeapObject(val);

};

__exports.__widl_f_prevent_default_Event = function(arg0) {
    getObject(arg0).preventDefault();
};

__exports.__widl_f_default_prevented_Event = function(arg0) {
    return getObject(arg0).defaultPrevented;
};

function handleError(exnptr, e) {
    const view = getUint32Memory();
    view[exnptr / 4] = 1;
    view[exnptr / 4 + 1] = addHeapObject(e);
}

__exports.__widl_f_add_event_listener_with_callback_EventTarget = function(arg0, arg1, arg2, arg3, exnptr) {
    let varg1 = getStringFromWasm(arg1, arg2);
    try {
        getObject(arg0).addEventListener(varg1, getObject(arg3));
    } catch (e) {
        handleError(exnptr, e);
    }
};

__exports.__widl_instanceof_HTMLCanvasElement = function(idx) { return getObject(idx) instanceof HTMLCanvasElement ? 1 : 0; };

__exports.__widl_f_get_context_HTMLCanvasElement = function(arg0, arg1, arg2, exnptr) {
    let varg1 = getStringFromWasm(arg1, arg2);
    try {

        const val = getObject(arg0).getContext(varg1);
        return isLikeNone(val) ? 0 : addHeapObject(val);

    } catch (e) {
        handleError(exnptr, e);
    }
};

__exports.__widl_f_width_HTMLCanvasElement = function(arg0) {
    return getObject(arg0).width;
};

__exports.__widl_f_height_HTMLCanvasElement = function(arg0) {
    return getObject(arg0).height;
};

__exports.__widl_f_code_KeyboardEvent = function(ret, arg0) {

    const retptr = passStringToWasm(getObject(arg0).code);
    const retlen = WASM_VECTOR_LEN;
    const mem = getUint32Memory();
    mem[ret / 4] = retptr;
    mem[ret / 4 + 1] = retlen;

};

__exports.__widl_f_offset_x_MouseEvent = function(arg0) {
    return getObject(arg0).offsetX;
};

__exports.__widl_f_offset_y_MouseEvent = function(arg0) {
    return getObject(arg0).offsetY;
};

__exports.__widl_f_button_MouseEvent = function(arg0) {
    return getObject(arg0).button;
};

__exports.__widl_f_movement_x_MouseEvent = function(arg0) {
    return getObject(arg0).movementX;
};

__exports.__widl_f_movement_y_MouseEvent = function(arg0) {
    return getObject(arg0).movementY;
};

__exports.__widl_f_now_Performance = function(arg0) {
    return getObject(arg0).now();
};

__exports.__widl_instanceof_WebGL2RenderingContext = function(idx) { return getObject(idx) instanceof WebGL2RenderingContext ? 1 : 0; };

__exports.__widl_f_bind_vertex_array_WebGL2RenderingContext = function(arg0, arg1) {
    getObject(arg0).bindVertexArray(getObject(arg1));
};

__exports.__widl_f_buffer_data_with_array_buffer_view_WebGL2RenderingContext = function(arg0, arg1, arg2, arg3) {
    getObject(arg0).bufferData(arg1, getObject(arg2), arg3);
};

__exports.__widl_f_create_vertex_array_WebGL2RenderingContext = function(arg0) {

    const val = getObject(arg0).createVertexArray();
    return isLikeNone(val) ? 0 : addHeapObject(val);

};

__exports.__widl_f_draw_buffers_WebGL2RenderingContext = function(arg0, arg1) {
    getObject(arg0).drawBuffers(getObject(arg1));
};

__exports.__widl_f_draw_elements_instanced_with_i32_WebGL2RenderingContext = function(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).drawElementsInstanced(arg1, arg2, arg3, arg4, arg5);
};

__exports.__widl_f_tex_storage_2d_WebGL2RenderingContext = function(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).texStorage2D(arg1, arg2, arg3, arg4, arg5);
};

let cachegetFloat32Memory = null;
function getFloat32Memory() {
    if (cachegetFloat32Memory === null || cachegetFloat32Memory.buffer !== wasm.memory.buffer) {
        cachegetFloat32Memory = new Float32Array(wasm.memory.buffer);
    }
    return cachegetFloat32Memory;
}

function getArrayF32FromWasm(ptr, len) {
    return getFloat32Memory().subarray(ptr / 4, ptr / 4 + len);
}

__exports.__widl_f_uniform3fv_with_f32_array_WebGL2RenderingContext = function(arg0, arg1, arg2, arg3) {
    let varg2 = getArrayF32FromWasm(arg2, arg3);
    getObject(arg0).uniform3fv(getObject(arg1), varg2);
};

__exports.__widl_f_uniform_matrix4fv_with_f32_array_WebGL2RenderingContext = function(arg0, arg1, arg2, arg3, arg4) {
    let varg3 = getArrayF32FromWasm(arg3, arg4);
    getObject(arg0).uniformMatrix4fv(getObject(arg1), arg2 !== 0, varg3);
};

__exports.__widl_f_vertex_attrib_divisor_WebGL2RenderingContext = function(arg0, arg1, arg2) {
    getObject(arg0).vertexAttribDivisor(arg1, arg2);
};

__exports.__widl_f_active_texture_WebGL2RenderingContext = function(arg0, arg1) {
    getObject(arg0).activeTexture(arg1);
};

__exports.__widl_f_attach_shader_WebGL2RenderingContext = function(arg0, arg1, arg2) {
    getObject(arg0).attachShader(getObject(arg1), getObject(arg2));
};

__exports.__widl_f_bind_buffer_WebGL2RenderingContext = function(arg0, arg1, arg2) {
    getObject(arg0).bindBuffer(arg1, getObject(arg2));
};

__exports.__widl_f_bind_framebuffer_WebGL2RenderingContext = function(arg0, arg1, arg2) {
    getObject(arg0).bindFramebuffer(arg1, getObject(arg2));
};

__exports.__widl_f_bind_texture_WebGL2RenderingContext = function(arg0, arg1, arg2) {
    getObject(arg0).bindTexture(arg1, getObject(arg2));
};

__exports.__widl_f_blend_func_WebGL2RenderingContext = function(arg0, arg1, arg2) {
    getObject(arg0).blendFunc(arg1, arg2);
};

__exports.__widl_f_check_framebuffer_status_WebGL2RenderingContext = function(arg0, arg1) {
    return getObject(arg0).checkFramebufferStatus(arg1);
};

__exports.__widl_f_clear_WebGL2RenderingContext = function(arg0, arg1) {
    getObject(arg0).clear(arg1);
};

__exports.__widl_f_clear_color_WebGL2RenderingContext = function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).clearColor(arg1, arg2, arg3, arg4);
};

__exports.__widl_f_compile_shader_WebGL2RenderingContext = function(arg0, arg1) {
    getObject(arg0).compileShader(getObject(arg1));
};

__exports.__widl_f_create_buffer_WebGL2RenderingContext = function(arg0) {

    const val = getObject(arg0).createBuffer();
    return isLikeNone(val) ? 0 : addHeapObject(val);

};

__exports.__widl_f_create_framebuffer_WebGL2RenderingContext = function(arg0) {

    const val = getObject(arg0).createFramebuffer();
    return isLikeNone(val) ? 0 : addHeapObject(val);

};

__exports.__widl_f_create_program_WebGL2RenderingContext = function(arg0) {

    const val = getObject(arg0).createProgram();
    return isLikeNone(val) ? 0 : addHeapObject(val);

};

__exports.__widl_f_create_shader_WebGL2RenderingContext = function(arg0, arg1) {

    const val = getObject(arg0).createShader(arg1);
    return isLikeNone(val) ? 0 : addHeapObject(val);

};

__exports.__widl_f_create_texture_WebGL2RenderingContext = function(arg0) {

    const val = getObject(arg0).createTexture();
    return isLikeNone(val) ? 0 : addHeapObject(val);

};

__exports.__widl_f_cull_face_WebGL2RenderingContext = function(arg0, arg1) {
    getObject(arg0).cullFace(arg1);
};

__exports.__widl_f_delete_framebuffer_WebGL2RenderingContext = function(arg0, arg1) {
    getObject(arg0).deleteFramebuffer(getObject(arg1));
};

__exports.__widl_f_delete_program_WebGL2RenderingContext = function(arg0, arg1) {
    getObject(arg0).deleteProgram(getObject(arg1));
};

__exports.__widl_f_delete_shader_WebGL2RenderingContext = function(arg0, arg1) {
    getObject(arg0).deleteShader(getObject(arg1));
};

__exports.__widl_f_delete_texture_WebGL2RenderingContext = function(arg0, arg1) {
    getObject(arg0).deleteTexture(getObject(arg1));
};

__exports.__widl_f_depth_func_WebGL2RenderingContext = function(arg0, arg1) {
    getObject(arg0).depthFunc(arg1);
};

__exports.__widl_f_depth_mask_WebGL2RenderingContext = function(arg0, arg1) {
    getObject(arg0).depthMask(arg1 !== 0);
};

__exports.__widl_f_detach_shader_WebGL2RenderingContext = function(arg0, arg1, arg2) {
    getObject(arg0).detachShader(getObject(arg1), getObject(arg2));
};

__exports.__widl_f_disable_WebGL2RenderingContext = function(arg0, arg1) {
    getObject(arg0).disable(arg1);
};

__exports.__widl_f_draw_elements_with_i32_WebGL2RenderingContext = function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).drawElements(arg1, arg2, arg3, arg4);
};

__exports.__widl_f_enable_WebGL2RenderingContext = function(arg0, arg1) {
    getObject(arg0).enable(arg1);
};

__exports.__widl_f_enable_vertex_attrib_array_WebGL2RenderingContext = function(arg0, arg1) {
    getObject(arg0).enableVertexAttribArray(arg1);
};

__exports.__widl_f_framebuffer_texture_2d_WebGL2RenderingContext = function(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).framebufferTexture2D(arg1, arg2, arg3, getObject(arg4), arg5);
};

__exports.__widl_f_get_attrib_location_WebGL2RenderingContext = function(arg0, arg1, arg2, arg3) {
    let varg2 = getStringFromWasm(arg2, arg3);
    return getObject(arg0).getAttribLocation(getObject(arg1), varg2);
};

__exports.__widl_f_get_extension_WebGL2RenderingContext = function(arg0, arg1, arg2, exnptr) {
    let varg1 = getStringFromWasm(arg1, arg2);
    try {

        const val = getObject(arg0).getExtension(varg1);
        return isLikeNone(val) ? 0 : addHeapObject(val);

    } catch (e) {
        handleError(exnptr, e);
    }
};

__exports.__widl_f_get_program_info_log_WebGL2RenderingContext = function(ret, arg0, arg1) {
    const val = getObject(arg0).getProgramInfoLog(getObject(arg1));
    const retptr = isLikeNone(val) ? [0, 0] : passStringToWasm(val);
    const retlen = WASM_VECTOR_LEN;
    const mem = getUint32Memory();
    mem[ret / 4] = retptr;
    mem[ret / 4 + 1] = retlen;

};

__exports.__widl_f_get_program_parameter_WebGL2RenderingContext = function(arg0, arg1, arg2) {
    return addHeapObject(getObject(arg0).getProgramParameter(getObject(arg1), arg2));
};

__exports.__widl_f_get_shader_info_log_WebGL2RenderingContext = function(ret, arg0, arg1) {
    const val = getObject(arg0).getShaderInfoLog(getObject(arg1));
    const retptr = isLikeNone(val) ? [0, 0] : passStringToWasm(val);
    const retlen = WASM_VECTOR_LEN;
    const mem = getUint32Memory();
    mem[ret / 4] = retptr;
    mem[ret / 4 + 1] = retlen;

};

__exports.__widl_f_get_shader_parameter_WebGL2RenderingContext = function(arg0, arg1, arg2) {
    return addHeapObject(getObject(arg0).getShaderParameter(getObject(arg1), arg2));
};

__exports.__widl_f_get_uniform_location_WebGL2RenderingContext = function(arg0, arg1, arg2, arg3) {
    let varg2 = getStringFromWasm(arg2, arg3);

    const val = getObject(arg0).getUniformLocation(getObject(arg1), varg2);
    return isLikeNone(val) ? 0 : addHeapObject(val);

};

__exports.__widl_f_link_program_WebGL2RenderingContext = function(arg0, arg1) {
    getObject(arg0).linkProgram(getObject(arg1));
};

__exports.__widl_f_shader_source_WebGL2RenderingContext = function(arg0, arg1, arg2, arg3) {
    let varg2 = getStringFromWasm(arg2, arg3);
    getObject(arg0).shaderSource(getObject(arg1), varg2);
};

__exports.__widl_f_tex_parameteri_WebGL2RenderingContext = function(arg0, arg1, arg2, arg3) {
    getObject(arg0).texParameteri(arg1, arg2, arg3);
};

__exports.__widl_f_uniform1f_WebGL2RenderingContext = function(arg0, arg1, arg2) {
    getObject(arg0).uniform1f(getObject(arg1), arg2);
};

__exports.__widl_f_uniform1i_WebGL2RenderingContext = function(arg0, arg1, arg2) {
    getObject(arg0).uniform1i(getObject(arg1), arg2);
};

__exports.__widl_f_use_program_WebGL2RenderingContext = function(arg0, arg1) {
    getObject(arg0).useProgram(getObject(arg1));
};

__exports.__widl_f_vertex_attrib_pointer_with_i32_WebGL2RenderingContext = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    getObject(arg0).vertexAttribPointer(arg1, arg2, arg3, arg4 !== 0, arg5, arg6);
};

__exports.__widl_f_viewport_WebGL2RenderingContext = function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).viewport(arg1, arg2, arg3, arg4);
};

__exports.__widl_f_delta_y_WheelEvent = function(arg0) {
    return getObject(arg0).deltaY;
};

__exports.__widl_instanceof_Window = function(idx) { return getObject(idx) instanceof Window ? 1 : 0; };

__exports.__widl_f_request_animation_frame_Window = function(arg0, arg1, exnptr) {
    try {
        return getObject(arg0).requestAnimationFrame(getObject(arg1));
    } catch (e) {
        handleError(exnptr, e);
    }
};

__exports.__widl_f_document_Window = function(arg0) {

    const val = getObject(arg0).document;
    return isLikeNone(val) ? 0 : addHeapObject(val);

};

__exports.__widl_f_performance_Window = function(arg0) {

    const val = getObject(arg0).performance;
    return isLikeNone(val) ? 0 : addHeapObject(val);

};

__exports.__wbg_new_a2f07ab237bf3627 = function(arg0) {
    return addHeapObject(new Float32Array(getObject(arg0)));
};

__exports.__wbg_subarray_570c38fd448b1fe6 = function(arg0, arg1, arg2) {
    return addHeapObject(getObject(arg0).subarray(arg1, arg2));
};

__exports.__wbg_newnoargs_3c6fc8d4dae9ea25 = function(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    return addHeapObject(new Function(varg0));
};

__exports.__wbg_call_d3e8beef2a1dcd98 = function(arg0, arg1, exnptr) {
    try {
        return addHeapObject(getObject(arg0).call(getObject(arg1)));
    } catch (e) {
        handleError(exnptr, e);
    }
};

__exports.__wbg_new_320125b278ae9cce = function(arg0) {
    return addHeapObject(new Uint32Array(getObject(arg0)));
};

__exports.__wbg_subarray_581e6c7f3717af16 = function(arg0, arg1, arg2) {
    return addHeapObject(getObject(arg0).subarray(arg1, arg2));
};

__exports.__wbg_instanceof_Memory_98e1f75012963cf9 = function(idx) { return getObject(idx) instanceof WebAssembly.Memory ? 1 : 0; };

__exports.__wbg_buffer_56cac7ead8d97f53 = function(arg0) {
    return addHeapObject(getObject(arg0).buffer);
};

__exports.__wbindgen_boolean_get = function(i) {
    let v = getObject(i);
    return typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
};

__exports.__wbindgen_debug_string = function(i, len_ptr) {
    const debug_str =
    val => {
        // primitive types
        const type = typeof val;
        if (type == 'number' || type == 'boolean' || val == null) {
            return  `${val}`;
        }
        if (type == 'string') {
            return `"${val}"`;
        }
        if (type == 'symbol') {
            const description = val.description;
            if (description == null) {
                return 'Symbol';
            } else {
                return `Symbol(${description})`;
            }
        }
        if (type == 'function') {
            const name = val.name;
            if (typeof name == 'string' && name.length > 0) {
                return `Function(${name})`;
            } else {
                return 'Function';
            }
        }
        // objects
        if (Array.isArray(val)) {
            const length = val.length;
            let debug = '[';
            if (length > 0) {
                debug += debug_str(val[0]);
            }
            for(let i = 1; i < length; i++) {
                debug += ', ' + debug_str(val[i]);
            }
            debug += ']';
            return debug;
        }
        // Test for built-in
        const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
        let className;
        if (builtInMatches.length > 1) {
            className = builtInMatches[1];
        } else {
            // Failed to match the standard '[object ClassName]'
            return toString.call(val);
        }
        if (className == 'Object') {
            // we're a user defined class or Object
            // JSON.stringify avoids problems with cycles, and is generally much
            // easier than looping through ownProperties of `val`.
            try {
                return 'Object(' + JSON.stringify(val) + ')';
            } catch (_) {
                return 'Object';
            }
        }
        // errors
        if (val instanceof Error) {
        return `${val.name}: ${val.message}
        ${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}
;
const toString = Object.prototype.toString;
const val = getObject(i);
const debug = debug_str(val);
const ptr = passStringToWasm(debug);
getUint32Memory()[len_ptr / 4] = WASM_VECTOR_LEN;
return ptr;
};

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

__exports.__wbindgen_cb_drop = function(i) {
    const obj = takeObject(i).original;
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return 1;
    }
    return 0;
};

__exports.__wbindgen_cb_forget = dropObject;

__exports.__wbindgen_memory = function() { return addHeapObject(wasm.memory); };

__exports.__wbindgen_throw = function(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
};

__exports.__wbindgen_closure_wrapper130 = function(a, b, _ignored) {
    const f = wasm.__wbg_function_table.get(27);
    const d = wasm.__wbg_function_table.get(28);
    const cb = function() {
        this.cnt++;
        let a = this.a;
        this.a = 0;
        try {
            return f(a, b);

        } finally {
            this.a = a;
            if (this.cnt-- == 1) d(this.a, b);

        }

    };
    cb.a = a;
    cb.cnt = 1;
    let real = cb.bind(cb);
    real.original = cb;
    return addHeapObject(real);
};

__exports.__wbindgen_closure_wrapper298 = function(a, b, _ignored) {
    const f = wasm.__wbg_function_table.get(89);
    const d = wasm.__wbg_function_table.get(90);
    const cb = function(arg0) {
        this.cnt++;
        let a = this.a;
        this.a = 0;
        try {
            return f(a, b, addHeapObject(arg0));

        } finally {
            this.a = a;
            if (this.cnt-- == 1) d(this.a, b);

        }

    };
    cb.a = a;
    cb.cnt = 1;
    let real = cb.bind(cb);
    real.original = cb;
    return addHeapObject(real);
};

__exports.__wbindgen_closure_wrapper300 = function(a, b, _ignored) {
    const f = wasm.__wbg_function_table.get(89);
    const d = wasm.__wbg_function_table.get(90);
    const cb = function(arg0) {
        this.cnt++;
        let a = this.a;
        this.a = 0;
        try {
            return f(a, b, addHeapObject(arg0));

        } finally {
            this.a = a;
            if (this.cnt-- == 1) d(this.a, b);

        }

    };
    cb.a = a;
    cb.cnt = 1;
    let real = cb.bind(cb);
    real.original = cb;
    return addHeapObject(real);
};

__exports.__wbindgen_closure_wrapper302 = function(a, b, _ignored) {
    const f = wasm.__wbg_function_table.get(89);
    const d = wasm.__wbg_function_table.get(90);
    const cb = function(arg0) {
        this.cnt++;
        let a = this.a;
        this.a = 0;
        try {
            return f(a, b, addHeapObject(arg0));

        } finally {
            this.a = a;
            if (this.cnt-- == 1) d(this.a, b);

        }

    };
    cb.a = a;
    cb.cnt = 1;
    let real = cb.bind(cb);
    real.original = cb;
    return addHeapObject(real);
};

__exports.__wbindgen_object_clone_ref = function(idx) {
    return addHeapObject(getObject(idx));
};

__exports.__wbindgen_object_drop_ref = function(i) { dropObject(i); };

function init(module_or_path, maybe_memory) {
    let result;
    const imports = { './web': __exports };
    if (module_or_path instanceof WebAssembly.Module) {

        result = WebAssembly.instantiate(module_or_path, imports)
        .then(instance => {
            return { instance, module: module_or_path };
        });
    } else {

        const response = fetch(module_or_path);
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            result = WebAssembly.instantiateStreaming(response, imports)
            .catch(e => {
                console.warn("`WebAssembly.instantiateStreaming` failed. Assuming this is because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
                return response
                .then(r => r.arrayBuffer())
                .then(bytes => WebAssembly.instantiate(bytes, imports));
            });
        } else {
            result = response
            .then(r => r.arrayBuffer())
            .then(bytes => WebAssembly.instantiate(bytes, imports));
        }
    }
    return result.then(({instance, module}) => {
        wasm = instance.exports;
        init.__wbindgen_wasm_module = module;
        wasm.__wbindgen_start();
        return wasm;
    });
}

self.wasm_bindgen = Object.assign(init, __exports);

})();
