// This file is automatically generated, so please do not edit it.
// Generated by `flutter_rust_bridge`@ 2.0.0-dev.39.

// Section: imports

use super::*;
use flutter_rust_bridge::for_generated::byteorder::{NativeEndian, ReadBytesExt, WriteBytesExt};
use flutter_rust_bridge::for_generated::{transform_result_dco, Lockable};
use flutter_rust_bridge::{Handler, IntoIntoDart};

// Section: boilerplate

flutter_rust_bridge::frb_generated_boilerplate_io!();

#[no_mangle]
pub extern "C" fn frbgen_frb_example_dart_minimal_wire__crate__api__minimal__init_app(port_: i64) {
    wire__crate__api__minimal__init_app_impl(port_)
}

#[no_mangle]
pub extern "C" fn frbgen_frb_example_dart_minimal_wire__crate__api__minimal__minimal_adder(
    port_: i64,
    a: i32,
    b: i32,
) {
    wire__crate__api__minimal__minimal_adder_impl(port_, a, b)
}
