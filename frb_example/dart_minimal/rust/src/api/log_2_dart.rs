use crate::frb_generated::StreamSink;
use log::{Level, Metadata, Record};
use std::sync::{atomic::AtomicBool, OnceLock};

static LOG2DART: Log2Dart = Log2Dart {};
// TODO change String into Record

static STREAM_SINK: OnceLock<StreamSink<String>> = OnceLock::new();
static IS_READY: AtomicBool = AtomicBool::new(false);
pub struct Log2Dart {}

//TODO avoid this and rather Box log_fn into a Send enabled box
// unsafe impl Sync for Log2Dart<'_> {}
// unsafe impl Send for Log2Dart<'_> {}

// TODO implement Debug for StreamSink in frb_generated
impl std::fmt::Debug for StreamSink<std::string::String> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("StreamSink")
            // .field("base", &self.base)
            .finish()
    }
}

// impl Log2Dart {
pub fn init_log2dart(log_stream: StreamSink<String>) {
    if !IS_READY.load(std::sync::atomic::Ordering::Relaxed) {
        STREAM_SINK
            .set(log_stream)
            .expect("Could not initialize log stream");

        log::set_logger(&LOG2DART).expect("error setting the log2dart logger");
        IS_READY.store(true, std::sync::atomic::Ordering::Relaxed);
        log::info!("From Rust: Initialized logger");
    }
}
// impl<T: Send + Sync> log::Log for Log2Dart {
impl log::Log for Log2Dart {
    fn enabled(&self, metadata: &Metadata) -> bool {
        metadata.level() <= Level::Info
    }

    fn log(&self, record: &Record) {
        if self.enabled(record.metadata()) && IS_READY.load(std::sync::atomic::Ordering::Relaxed) {
            STREAM_SINK
                .get()
                .unwrap()
                .add(format!(
                    "in log2dart: {} - {}",
                    record.level(),
                    record.args()
                ))
                .expect("could not add to stream while sending to dart ");
            // println!("{} - {}", record.level(), record.args());
        }
    }

    fn flush(&self) {
        //TODO flush the StreamSink
    }
}