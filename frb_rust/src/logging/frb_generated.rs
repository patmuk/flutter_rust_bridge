// This is based on frb_codegen generate of log_2_dart.rs
// `flutter_rust_bridge`@ 2.4.0.

#![allow(
    non_camel_case_types,
    unused,
    non_snake_case,
    clippy::needless_return,
    clippy::redundant_closure_call,
    clippy::redundant_closure,
    clippy::useless_conversion,
    clippy::unit_arg,
    clippy::unused_unit,
    clippy::double_parens,
    clippy::let_and_return,
    clippy::too_many_arguments,
    clippy::match_single_binding,
    clippy::clone_on_copy,
    clippy::let_unit_value,
    clippy::deref_addrof,
    clippy::explicit_auto_deref,
    clippy::borrow_deref_ref,
    clippy::needless_borrow
)]

// Section: imports

use std::sync::LazyLock;

use crate::for_generated::byteorder::{NativeEndian, ReadBytesExt, WriteBytesExt};
use crate::for_generated::{self, transform_result_dco, Lifetimeable, Lockable};
use crate::{frb_generated_default_handler, logging::*, DefaultHandler};
use crate::{Handler, IntoIntoDart};

// Section: boilerplate

use log::LevelFilter;

crate::frb_generated_boilerplate!(
    default_stream_sink_codec = SseCodec,
    default_rust_opaque = RustOpaqueMoi,
    default_rust_auto_opaque = RustAutoOpaqueMoi,
);
pub(crate) const FLUTTER_RUST_BRIDGE_CODEGEN_VERSION: &str = "2.4.0";
pub(crate) const FLUTTER_RUST_BRIDGE_CODEGEN_CONTENT_HASH: i32 = 80437977;

// Section: executor
// TODO fix this for web
frb_generated_default_handler!();
// crate::frb_generated_default_handler!();
// pub static FLUTTER_RUST_BRIDGE_HANDLER: LazyLock<
//     // pub static FLUTTER_RUST_BRIDGE_HANDLER_LOGGER: LazyLock<
//     DefaultHandler<for_generated::SimpleThreadPool>,
// > = { LazyLock::new(|| DefaultHandler::new_simple(Default::default())) };

// Section: wire_funcs

fn wire__crate__api__log_2_dart__change_log_level_impl(
    port_: crate::for_generated::MessagePort,
    ptr_: crate::for_generated::PlatformGeneralizedUint8ListPtr,
    rust_vec_len_: i32,
    data_len_: i32,
) {
    FLUTTER_RUST_BRIDGE_HANDLER.wrap_normal::<crate::for_generated::SseCodec, _, _>(
        crate::for_generated::TaskInfo {
            debug_name: "change_log_level",
            port: Some(port_),
            mode: crate::for_generated::FfiCallMode::Normal,
        },
        move || {
            let message = unsafe {
                crate::for_generated::Dart2RustMessageSse::from_wire(ptr_, rust_vec_len_, data_len_)
            };
            let mut deserializer = crate::for_generated::SseDeserializer::new(message);
            let api_new_log_level = <LevelFilter>::sse_decode(&mut deserializer);
            deserializer.end();
            move |context| {
                transform_result_sse::<_, ()>((move || {
                    let output_ok = Result::<_, ()>::Ok({
                        crate::logging::log_2_dart::change_log_level(api_new_log_level);
                    })?;
                    Ok(output_ok)
                })())
            }
        },
    )
}
fn wire__crate__api__log_2_dart__initialize_log2dart_impl(
    port_: crate::for_generated::MessagePort,
    ptr_: crate::for_generated::PlatformGeneralizedUint8ListPtr,
    rust_vec_len_: i32,
    data_len_: i32,
) {
    FLUTTER_RUST_BRIDGE_HANDLER.wrap_normal::<crate::for_generated::SseCodec, _, _>(
        crate::for_generated::TaskInfo {
            debug_name: "initialize_log2dart",
            port: Some(port_),
            mode: crate::for_generated::FfiCallMode::Normal,
        },
        move || {
            let message = unsafe {
                crate::for_generated::Dart2RustMessageSse::from_wire(ptr_, rust_vec_len_, data_len_)
            };
            let mut deserializer = crate::for_generated::SseDeserializer::new(message);
            let api_log_stream = <StreamSink<
                crate::logging::log_2_dart::Log2DartLogRecord,
                crate::for_generated::SseCodec,
            >>::sse_decode(&mut deserializer);
            let api_max_log_level = <LevelFilter>::sse_decode(&mut deserializer);
            deserializer.end();
            move |context| {
                transform_result_sse::<_, ()>((move || {
                    let output_ok = Result::<_, ()>::Ok({
                        crate::logging::log_2_dart::initialize_log2dart(
                            api_log_stream,
                            api_max_log_level,
                        );
                    })?;
                    Ok(output_ok)
                })())
            }
        },
    )
}

// Section: dart2rust

impl SseDecode for crate::for_generated::anyhow::Error {
    // Codec=Sse (Serialization based), see doc to use other codecs
    fn sse_decode(deserializer: &mut crate::for_generated::SseDeserializer) -> Self {
        let mut inner = <String>::sse_decode(deserializer);
        return crate::for_generated::anyhow::anyhow!("{}", inner);
    }
}

impl SseDecode for LevelFilter {
    // Codec=Sse (Serialization based), see doc to use other codecs
    fn sse_decode(deserializer: &mut crate::for_generated::SseDeserializer) -> Self {
        let mut inner = <u16>::sse_decode(deserializer);
        return crate::logging::log_2_dart::decode_log_level_filter(inner);
    }
}

impl SseDecode
    for StreamSink<crate::logging::log_2_dart::Log2DartLogRecord, crate::for_generated::SseCodec>
{
    // Codec=Sse (Serialization based), see doc to use other codecs
    fn sse_decode(deserializer: &mut crate::for_generated::SseDeserializer) -> Self {
        let mut inner = <String>::sse_decode(deserializer);
        return StreamSink::deserialize(inner);
    }
}

impl SseDecode for String {
    // Codec=Sse (Serialization based), see doc to use other codecs
    fn sse_decode(deserializer: &mut crate::for_generated::SseDeserializer) -> Self {
        let mut inner = <Vec<u8>>::sse_decode(deserializer);
        return String::from_utf8(inner).unwrap();
    }
}

impl SseDecode for i32 {
    // Codec=Sse (Serialization based), see doc to use other codecs
    fn sse_decode(deserializer: &mut crate::for_generated::SseDeserializer) -> Self {
        deserializer.cursor.read_i32::<NativeEndian>().unwrap()
    }
}

impl SseDecode for Vec<u8> {
    // Codec=Sse (Serialization based), see doc to use other codecs
    fn sse_decode(deserializer: &mut crate::for_generated::SseDeserializer) -> Self {
        let mut len_ = <i32>::sse_decode(deserializer);
        let mut ans_ = vec![];
        for idx_ in 0..len_ {
            ans_.push(<u8>::sse_decode(deserializer));
        }
        return ans_;
    }
}

impl SseDecode for crate::logging::log_2_dart::Log2DartLogRecord {
    // Codec=Sse (Serialization based), see doc to use other codecs
    fn sse_decode(deserializer: &mut crate::for_generated::SseDeserializer) -> Self {
        let mut var_level = <LevelFilter>::sse_decode(deserializer);
        let mut var_message = <String>::sse_decode(deserializer);
        let mut var_loggerName = <String>::sse_decode(deserializer);
        return crate::logging::log_2_dart::Log2DartLogRecord {
            level: var_level,
            message: var_message,
            logger_name: var_loggerName,
        };
    }
}

impl SseDecode for u16 {
    // Codec=Sse (Serialization based), see doc to use other codecs
    fn sse_decode(deserializer: &mut crate::for_generated::SseDeserializer) -> Self {
        deserializer.cursor.read_u16::<NativeEndian>().unwrap()
    }
}

impl SseDecode for u8 {
    // Codec=Sse (Serialization based), see doc to use other codecs
    fn sse_decode(deserializer: &mut crate::for_generated::SseDeserializer) -> Self {
        deserializer.cursor.read_u8().unwrap()
    }
}

impl SseDecode for () {
    // Codec=Sse (Serialization based), see doc to use other codecs
    fn sse_decode(deserializer: &mut crate::for_generated::SseDeserializer) -> Self {}
}

impl SseDecode for bool {
    // Codec=Sse (Serialization based), see doc to use other codecs
    fn sse_decode(deserializer: &mut crate::for_generated::SseDeserializer) -> Self {
        deserializer.cursor.read_u8().unwrap() != 0
    }
}

fn pde_ffi_dispatcher_primary_impl(
    func_id: i32,
    port: crate::for_generated::MessagePort,
    ptr: crate::for_generated::PlatformGeneralizedUint8ListPtr,
    rust_vec_len: i32,
    data_len: i32,
) {
    // Codec=Pde (Serialization + dispatch), see doc to use other codecs
    match func_id {
        1 => wire__crate__api__log_2_dart__change_log_level_impl(port, ptr, rust_vec_len, data_len),
        2 => wire__crate__api__log_2_dart__initialize_log2dart_impl(
            port,
            ptr,
            rust_vec_len,
            data_len,
        ),
        _ => unreachable!(),
    }
}

fn pde_ffi_dispatcher_sync_impl(
    func_id: i32,
    ptr: crate::for_generated::PlatformGeneralizedUint8ListPtr,
    rust_vec_len: i32,
    data_len: i32,
) -> crate::for_generated::WireSyncRust2DartSse {
    // Codec=Pde (Serialization + dispatch), see doc to use other codecs
    match func_id {
        _ => unreachable!(),
    }
}

// Section: rust2dart

// Codec=Dco (DartCObject based), see doc to use other codecs
impl crate::IntoDart for FrbWrapper<LevelFilter> {
    fn into_dart(self) -> crate::for_generated::DartAbi {
        unimplemented!()
    }
}
impl crate::for_generated::IntoDartExceptPrimitive for FrbWrapper<LevelFilter> {}
impl crate::IntoIntoDart<FrbWrapper<LevelFilter>> for LevelFilter {
    fn into_into_dart(self) -> FrbWrapper<LevelFilter> {
        self.into()
    }
}
// Codec=Dco (DartCObject based), see doc to use other codecs
impl crate::IntoDart for crate::logging::log_2_dart::Log2DartLogRecord {
    fn into_dart(self) -> crate::for_generated::DartAbi {
        [
            self.level.into_into_dart().into_dart(),
            self.message.into_into_dart().into_dart(),
            self.logger_name.into_into_dart().into_dart(),
        ]
        .into_dart()
    }
}
impl crate::for_generated::IntoDartExceptPrimitive
    for crate::logging::log_2_dart::Log2DartLogRecord
{
}
impl crate::IntoIntoDart<crate::logging::log_2_dart::Log2DartLogRecord>
    for crate::logging::log_2_dart::Log2DartLogRecord
{
    fn into_into_dart(self) -> crate::logging::log_2_dart::Log2DartLogRecord {
        self
    }
}

impl SseEncode for crate::for_generated::anyhow::Error {
    // Codec=Sse (Serialization based), see doc to use other codecs
    fn sse_encode(self, serializer: &mut crate::for_generated::SseSerializer) {
        <String>::sse_encode(format!("{:?}", self), serializer);
    }
}

impl SseEncode for LevelFilter {
    // Codec=Sse (Serialization based), see doc to use other codecs
    fn sse_encode(self, serializer: &mut crate::for_generated::SseSerializer) {
        <u16>::sse_encode(
            crate::logging::log_2_dart::encode_log_level_filter(self),
            serializer,
        );
    }
}

impl SseEncode
    for StreamSink<crate::logging::log_2_dart::Log2DartLogRecord, crate::for_generated::SseCodec>
{
    // Codec=Sse (Serialization based), see doc to use other codecs
    fn sse_encode(self, serializer: &mut crate::for_generated::SseSerializer) {
        unimplemented!("")
    }
}

impl SseEncode for String {
    // Codec=Sse (Serialization based), see doc to use other codecs
    fn sse_encode(self, serializer: &mut crate::for_generated::SseSerializer) {
        <Vec<u8>>::sse_encode(self.into_bytes(), serializer);
    }
}

impl SseEncode for i32 {
    // Codec=Sse (Serialization based), see doc to use other codecs
    fn sse_encode(self, serializer: &mut crate::for_generated::SseSerializer) {
        serializer.cursor.write_i32::<NativeEndian>(self).unwrap();
    }
}

impl SseEncode for Vec<u8> {
    // Codec=Sse (Serialization based), see doc to use other codecs
    fn sse_encode(self, serializer: &mut crate::for_generated::SseSerializer) {
        <i32>::sse_encode(self.len() as _, serializer);
        for item in self {
            <u8>::sse_encode(item, serializer);
        }
    }
}

impl SseEncode for crate::logging::log_2_dart::Log2DartLogRecord {
    // Codec=Sse (Serialization based), see doc to use other codecs
    fn sse_encode(self, serializer: &mut crate::for_generated::SseSerializer) {
        <LevelFilter>::sse_encode(self.level, serializer);
        <String>::sse_encode(self.message, serializer);
        <String>::sse_encode(self.logger_name, serializer);
    }
}

impl SseEncode for u16 {
    // Codec=Sse (Serialization based), see doc to use other codecs
    fn sse_encode(self, serializer: &mut crate::for_generated::SseSerializer) {
        serializer.cursor.write_u16::<NativeEndian>(self).unwrap();
    }
}

impl SseEncode for u8 {
    // Codec=Sse (Serialization based), see doc to use other codecs
    fn sse_encode(self, serializer: &mut crate::for_generated::SseSerializer) {
        serializer.cursor.write_u8(self).unwrap();
    }
}

impl SseEncode for () {
    // Codec=Sse (Serialization based), see doc to use other codecs
    fn sse_encode(self, serializer: &mut crate::for_generated::SseSerializer) {}
}

impl SseEncode for bool {
    // Codec=Sse (Serialization based), see doc to use other codecs
    fn sse_encode(self, serializer: &mut crate::for_generated::SseSerializer) {
        serializer.cursor.write_u8(self as _).unwrap();
    }
}

#[cfg(not(target_family = "wasm"))]
mod io {
    // This file is automatically generated, so please do not edit it.
    // @generated by `flutter_rust_bridge`@ 2.4.0.

    // Section: imports

    use super::*;
    use crate::for_generated::byteorder::{NativeEndian, ReadBytesExt, WriteBytesExt};
    use crate::for_generated::{transform_result_dco, Lifetimeable, Lockable};
    use crate::logging::*;
    use crate::{Handler, IntoIntoDart};

    // Section: boilerplate

    use log::LevelFilter;

    crate::frb_generated_boilerplate_io!();
}
#[cfg(not(target_family = "wasm"))]
pub use io::*;

/// cbindgen:ignore
#[cfg(target_family = "wasm")]
mod web {
    // This file is automatically generated, so please do not edit it.
    // @generated by `flutter_rust_bridge`@ 2.4.0.

    // Section: imports

    use super::*;
    use crate::for_generated::byteorder::{NativeEndian, ReadBytesExt, WriteBytesExt};
    use crate::for_generated::wasm_bindgen;
    use crate::for_generated::wasm_bindgen::prelude::*;
    use crate::for_generated::{transform_result_dco, Lifetimeable, Lockable};
    use crate::logging::*;
    use flutter_rust_bridge::{Handler, IntoIntoDart};

    // Section: boilerplate

    use log::LevelFilter;

    flutter_rust_bridge::frb_generated_boilerplate_web!();
}
#[cfg(target_family = "wasm")]
pub use web::*;