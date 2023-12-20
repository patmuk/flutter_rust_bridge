// This file is automatically generated, so please do not edit it.
// Generated by `flutter_rust_bridge`@ 2.0.0-dev.2.

// ignore_for_file: invalid_use_of_internal_member, unused_import, unnecessary_import

import '../frb_generated.dart';
import 'package:collection/collection.dart';
import 'package:flutter_rust_bridge/flutter_rust_bridge_for_generated.dart';
import 'package:freezed_annotation/freezed_annotation.dart' hide protected;
import 'pseudo_manual/rust_opaque_sync_twin_sse.dart';
import 'pseudo_manual/rust_opaque_twin_rust_async.dart';
part 'rust_opaque.freezed.dart';

Future<HideData> createOpaqueTwinNormal({dynamic hint}) =>
    RustLib.instance.api.createOpaqueTwinNormal(hint: hint);

Future<HideData?> createOptionOpaqueTwinNormal(
        {HideData? opaque, dynamic hint}) =>
    RustLib.instance.api
        .createOptionOpaqueTwinNormal(opaque: opaque, hint: hint);

Future<EnumOpaqueTwinNormalArray5> createArrayOpaqueEnumTwinNormal(
        {dynamic hint}) =>
    RustLib.instance.api.createArrayOpaqueEnumTwinNormal(hint: hint);

Future<String> runEnumOpaqueTwinNormal(
        {required EnumOpaqueTwinNormal opaque, dynamic hint}) =>
    RustLib.instance.api.runEnumOpaqueTwinNormal(opaque: opaque, hint: hint);

Future<String> runOpaqueTwinNormal({required HideData opaque, dynamic hint}) =>
    RustLib.instance.api.runOpaqueTwinNormal(opaque: opaque, hint: hint);

Future<String> runOpaqueWithDelayTwinNormal(
        {required HideData opaque, dynamic hint}) =>
    RustLib.instance.api
        .runOpaqueWithDelayTwinNormal(opaque: opaque, hint: hint);

Future<HideDataArray2> opaqueArrayTwinNormal({dynamic hint}) =>
    RustLib.instance.api.opaqueArrayTwinNormal(hint: hint);

Future<String> runNonCloneTwinNormal(
        {required NonCloneData clone, dynamic hint}) =>
    RustLib.instance.api.runNonCloneTwinNormal(clone: clone, hint: hint);

Future<NonSendHideData> createSyncOpaqueTwinNormal({dynamic hint}) =>
    RustLib.instance.api.createSyncOpaqueTwinNormal(hint: hint);

Future<void> opaqueArrayRunTwinNormal(
        {required HideDataArray2 data, dynamic hint}) =>
    RustLib.instance.api.opaqueArrayRunTwinNormal(data: data, hint: hint);

Future<List<HideData>> opaqueVecTwinNormal({dynamic hint}) =>
    RustLib.instance.api.opaqueVecTwinNormal(hint: hint);

Future<void> opaqueVecRunTwinNormal(
        {required List<HideData> data, dynamic hint}) =>
    RustLib.instance.api.opaqueVecRunTwinNormal(data: data, hint: hint);

Future<OpaqueNestedTwinNormal> createNestedOpaqueTwinNormal({dynamic hint}) =>
    RustLib.instance.api.createNestedOpaqueTwinNormal(hint: hint);

Future<void> runNestedOpaqueTwinNormal(
        {required OpaqueNestedTwinNormal opaque, dynamic hint}) =>
    RustLib.instance.api.runNestedOpaqueTwinNormal(opaque: opaque, hint: hint);

Future<String> unwrapRustOpaqueTwinNormal(
        {required HideData opaque, dynamic hint}) =>
    RustLib.instance.api.unwrapRustOpaqueTwinNormal(opaque: opaque, hint: hint);

/// Function to check the code generator.
/// FrbOpaqueReturn must be only return type.
/// FrbOpaqueReturn must not be used as an argument.
Future<FrbOpaqueReturn> frbGeneratorTestTwinNormal({dynamic hint}) =>
    RustLib.instance.api.frbGeneratorTestTwinNormal(hint: hint);

// Rust type: flutter_rust_bridge::RustOpaque<Box<dyn DartDebugTwinNormal>>
@sealed
class BoxDartDebugTwinNormal extends RustOpaque {
  BoxDartDebugTwinNormal.dcoDecode(dynamic wire)
      : super.dcoDecode(wire, _kStaticData);

  BoxDartDebugTwinNormal.sseDecode(int ptr, int externalSizeOnNative)
      : super.sseDecode(ptr, externalSizeOnNative, _kStaticData);

  static final _kStaticData = RustArcStaticData(
    rustArcIncrementStrongCount: RustLib
        .instance.api.rust_arc_increment_strong_count_BoxDartDebugTwinNormal,
    rustArcDecrementStrongCount: RustLib
        .instance.api.rust_arc_decrement_strong_count_BoxDartDebugTwinNormal,
    rustArcDecrementStrongCountPtr: RustLib
        .instance.api.rust_arc_decrement_strong_count_BoxDartDebugTwinNormalPtr,
  );
}

@freezed
sealed class EnumOpaqueTwinNormal with _$EnumOpaqueTwinNormal {
  const factory EnumOpaqueTwinNormal.struct(
    HideData field0,
  ) = EnumOpaqueTwinNormal_Struct;
  const factory EnumOpaqueTwinNormal.primitive(
    I32 field0,
  ) = EnumOpaqueTwinNormal_Primitive;
  const factory EnumOpaqueTwinNormal.traitObj(
    BoxDartDebugTwinNormal field0,
  ) = EnumOpaqueTwinNormal_TraitObj;
  const factory EnumOpaqueTwinNormal.mutex(
    MutexHideData field0,
  ) = EnumOpaqueTwinNormal_Mutex;
  const factory EnumOpaqueTwinNormal.rwLock(
    RwLockHideData field0,
  ) = EnumOpaqueTwinNormal_RwLock;
}

class EnumOpaqueTwinNormalArray5
    extends NonGrowableListView<EnumOpaqueTwinNormal> {
  static const arraySize = 5;

  @internal
  List<EnumOpaqueTwinNormal> get inner => _inner;
  final List<EnumOpaqueTwinNormal> _inner;

  EnumOpaqueTwinNormalArray5(this._inner)
      : assert(_inner.length == arraySize),
        super(_inner);

  EnumOpaqueTwinNormalArray5.init(EnumOpaqueTwinNormal fill)
      : this(List<EnumOpaqueTwinNormal>.filled(arraySize, fill));
}

/// [`HideData`] has private fields.
class OpaqueNestedTwinNormal {
  final HideData first;
  final HideData second;

  const OpaqueNestedTwinNormal({
    required this.first,
    required this.second,
  });

  @override
  int get hashCode => first.hashCode ^ second.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is OpaqueNestedTwinNormal &&
          runtimeType == other.runtimeType &&
          first == other.first &&
          second == other.second;
}