package org.imirsel.nema.components.process;

import java.io.File;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.imirsel.nema.analytics.util.io.FileConversionUtil;
import org.imirsel.nema.analytics.util.io.NemaFileType;
import org.imirsel.nema.components.NemaComponent;
import org.imirsel.nema.model.NemaData;
import org.imirsel.nema.model.NemaTask;
import org.imirsel.nema.model.NemaTrackList;
import org.imirsel.nema.model.ProcessArtifact;
import org.meandre.annotations.Component;
import org.meandre.annotations.ComponentInput;
import org.meandre.annotations.ComponentOutput;
import org.meandre.core.ComponentContext;
import org.meandre.core.ComponentContextException;
import org.meandre.core.ComponentContextProperties;
import org.meandre.core.ComponentExecutionException;


@Component(creator = "Kris West", description = "Receives a datastructure that " +
		"defines a list of expected output file locations and then receives " +
		"a stream of ProcessArtifacts that represent entries in that datastructure " +
		"(files) being fulfilled by a process execution and retrieval of the " +
		"result to the desired local path. When all of the files have been " +
		"received, they are read and the resulting models output.",
		name = "OmenOutputReader", tags = "profile process execution", 
		firingPolicy = Component.FiringPolicy.any)
public class OmenOutputReader extends NemaComponent {

	@ComponentInput(description = "Map of NemaTrackList to List of NemaFile Objects defining expected output files that will be received as ProcessArtifacts.", name = "expectedOutput")
	private static final String DATA_IN_EXPECTED_OUTPUTS ="expectedOutput";

	@ComponentInput(description = "Process artifacts representing files that have been produced.", name = "processArtifacts")
	private static final String DATA_IN_PROCESS_ARTIFACTS ="processArtifacts";

	@ComponentInput(description = "NemaTask Object defining the task.", name = "NemaTask")
	private static final String DATA_IN_NEMATASK ="NemaTask";

	@ComponentInput(description = "Class representing the output file type that is to be read.", name = "FileType")
	private static final String DATA_IN_OUTPUT_TYPE ="FileType";

	@ComponentOutput(description = "Map of NemaTrackList to List of NemaData Objects defining each track list (encoding metadata generated by the remote process).",name = "PredictedData")
	private static final String DATA_OUTPUT="PredictedData";
	
	NemaTask task = null;
	Class<NemaFileType> fileType = null;
	Map<NemaTrackList,List<File>> expectedPaths = null;
	Set<File> toReceive = null;
	
	
	
	@Override
	public void initialize(ComponentContextProperties ccp)
	throws ComponentExecutionException, ComponentContextException {
		super.initialize(ccp);
	}

	@Override
	public void dispose(ComponentContextProperties ccp)
	throws ComponentContextException {
		super.dispose(ccp);
	}

	@SuppressWarnings("unchecked")
	@Override
	public void execute(ComponentContext cc)
			throws ComponentExecutionException, ComponentContextException {
		
		if(task == null && cc.isInputAvailable(DATA_IN_NEMATASK)){
			task = (NemaTask)cc.getDataComponentFromInput(DATA_IN_NEMATASK);
		}
		if(fileType == null && cc.isInputAvailable(DATA_IN_OUTPUT_TYPE)){
			fileType = (Class<NemaFileType>)cc.getDataComponentFromInput(DATA_IN_OUTPUT_TYPE);
		}
		if(expectedPaths == null && cc.isInputAvailable(DATA_IN_EXPECTED_OUTPUTS)){
			expectedPaths = (Map<NemaTrackList,List<File>>)cc.getDataComponentFromInput(DATA_IN_EXPECTED_OUTPUTS);
			toReceive = new HashSet<File>();
			for (Iterator<List<File>> it = expectedPaths.values().iterator(); it.hasNext();) {
				toReceive.addAll(it.next());
			}
		}
		//when we are configured start receiving process artifacts
		if(task != null && fileType != null && expectedPaths != null){
			while(cc.isInputAvailable(DATA_IN_PROCESS_ARTIFACTS)){
				ProcessArtifact in = (ProcessArtifact)cc.getDataComponentFromInput(DATA_IN_PROCESS_ARTIFACTS);
				File path = new File(in.getResourcePath());
				
				toReceive.remove(path);
				getLogger().info("Received file: "  + ", waiting on " + toReceive.size() + " files.");
				
				if (toReceive.isEmpty()){
					//we have all the files expected read and output
					Map<NemaTrackList, List<NemaData>> outputData = null;
					try {
						outputData = FileConversionUtil.readProcessOutput(expectedPaths, task, fileType);
					}catch(Exception e) {
					 throw new ComponentExecutionException(e);
					}
					
					if(outputData==null){
						throw new ComponentExecutionException("Process result is null");
					}else{
						cc.pushDataComponentToOutput(DATA_OUTPUT, outputData);
					}
					
					//reset
					task = null;
					fileType = null;
					expectedPaths = null;
					toReceive = null;
				}
			}
		}
	}

}
